import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmployee} from './modals/AddEmployee';
import {EditEmployee} from './modals/EditEmployee';
import './css/Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessAlertModal } from "./modals/SuccessAlertModal";
import { FailAlertModal } from "./modals/FailAlertModal";
import { ConfirmAlertModal } from "./modals/ConfirmAlertModal";

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
        fetch('https://localhost:5001/api/employee')
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
                            <tr key={emp.Emp_id}>
                                <td>{emp.Emp_id}</td>
                                <td>{emp.Emp_name}</td>
                                <td>{emp.Emp_phone}</td>
                                <td>{emp.Emp_email}</td>
                                <td>{emp.Emp_hourly_wage}</td>
                                <td>{emp.Emp_hours}</td>
                                <td>
<ButtonToolbar style={{display:'block'}}>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true, empid:emp.Emp_id, empname:emp.Emp_name, empphone:emp.Emp_phone,empemail:emp.Emp_email, emphw:emp.Emp_hourly_wage, emph:emp.Emp_hours})}
    style={{width: 70}}>
        Edit</Button>
        <Button className="mr-2" variant="danger" onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, empid:emp.Emp_id})}
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
                </Table>
                <ButtonToolbar className="ml-5">
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Employee</Button>

                    <AddEmployee show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <FailAlertModal
            show={this.state.failModalShow}
            onHide={failModalClose}
            message={this.state.alertMessage}
          ></FailAlertModal>
          <ConfirmAlertModal
            show={this.state.confirmModalShow}
            onHide={confirmModalClose}
            message={this.state.alertMessage}
            onClickYes={()=>this.deleteEmp(this.state.empid)}
          ></ConfirmAlertModal> 
            </div>
        )
    }
}export default Employee
