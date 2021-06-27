import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmployee} from './modals/AddEmployee';
import {EditEmployee} from './modals/EditEmployee';
import './css/Employee.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessAlert } from "./modals/SuccessAlert";
import { FailAlert } from "./modals/FailAlert";
import { ConfirmAlert } from "./modals/ConfirmAlert";

export class Employee extends Component{
    constructor(props){
        super(props);
        // this.state={emps:[], addModalShow:false, editModalShow:false}
        this.state = {
            emps:[], addModalShow:false, editModalShow:false,
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
            confirmModalShow: false,
            alertMessage:null
        }
    }
    refreshList(){
        fetch('http://localhost:5000/api/employee')
        .then(response=>response.json())
        .then(data=>{
            this.setState({emps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(id){
        this.setState({ confirmModalShow: false });
  
        fetch('http://localhost:5000/api/employee/'+id,{
          method:'DELETE',
          headers:{'Accept':'applicaton/json', 'Content-Type':'applicaton/json'}
        }).then(res=>res.json())
        .then((result)=>{
          this.setState({ alertMessage: 'Deleted Successfully!', successModalShow: true });
        },
        (error)=>{
          this.setState({ alertMessage: 'Delete Failed!', failModalShow: true });
        })
    
      }

    render (){
        const{emps, empid, empname, empphone,empemail,emphw,emph}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let failModalClose = () => this.setState({ failModalShow: false });
        let confirmModalClose = () => this.setState({ confirmModalShow: false });
        return (
            <div class="div">
                <Table className=" w-75 m-auto" striped  size="md" style={{textAlign:'center'}}>
                    <thead class="thead" style={{background:'rgb(16,62,105)', 
                                                 color:'rgb(237,237,237)',
                                                 alignContent:'center'
                                                 }}>
                        <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Hourly Wage</th>
                        <th>Hours</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.emp_id}>
                                <td>{emp.emp_id}</td>
                                <td>{emp.emp_name}</td>
                                <td>{emp.emp_phone}</td>
                                <td>{emp.emp_email}</td>
                                <td>{emp.emp_hourly_wage}</td>
                                <td>{emp.emp_hours}</td>
                                <td>
<ButtonToolbar style={{display:'block'}}>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true, empid:emp.emp_id, empname:emp.emp_name, empphone:emp.emp_phone,empemail:emp.emp_email, emphw:emp.emp_hourly_wage, emph:emp.emp_hours})}
    style={{width: 70}}>
        Edit</Button>
        <Button className="mr-2" variant="danger" onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, empid:emp.emp_id})}
     style={{width:70}}>
        Delete</Button>
        <EditEmployee show={this.state.editModalShow}
                    onHide={editModalClose}
                    empid={empid}
                    empname={empname}
                    empphone={empphone}
                    empemail={empemail}
                    emphw={emphw}
                    emph={emph}/>
</ButtonToolbar>        
                                </td>
                            </tr>)}
                    </tbody>
                    <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Employee</Button>

                    <AddEmployee show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                </Table>
                
                <FailAlert
            show={this.state.failModalShow}
            onHide={failModalClose}
            message={this.state.alertMessage}
          />
          <ConfirmAlert
            show={this.state.confirmModalShow}
            onHide={confirmModalClose}
            message={this.state.alertMessage}
            onClickYes={()=>this.deleteEmp(this.state.empid)}
          /> 
            </div>
        )
    }
}export default Employee
