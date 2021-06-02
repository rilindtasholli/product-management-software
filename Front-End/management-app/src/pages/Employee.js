import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddEmployee} from './AddEmployee';
import {EditEmployee} from './EditEmployee';
import './css/Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Employee extends Component{
    constructor(props){
        super(props);
        this.state={emps:[], addModalShow:false, editModalShow:false}
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
    deleteEmp(empid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:5001/api/employee/'+empid,{
                method:'DELETE',
                header:{'Accept':'application/json', 
            'Content-Type':'application/json'}
            })
        }
    }

    render (){
        const{emps, empid, empname, empphone,empemail,emphw,emph}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
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
        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(emp.Emp_id)} style={{width:70}}>
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
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Employee</Button>

                    <AddEmployee show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}export default Employee