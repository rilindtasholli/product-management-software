import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import {EditEmployee} from "./EditEmployee";
import {AddEmployee} from "./AddEmployee";
//import "./css/Employee.css"

export class Employee extends Component{

   constructor(props){
      super(props);
      this.state = {addModalShow: false, editModalShow: false};
   }
   render(){
      let addModalClose = () => this.setState({addModalShow:false});
      let editModalClose = () => this.setState({editModalShow:false});

      return(
         <div className='main-content'>
               <div className="table-responsive">
            <Table  className=" w-75 mx-auto mt-5 mw-100 table table-hover table-bordered table-stripped" size="sm">
                    <thead class="thead-light" 
                    style={{
                    background:'#0d598c',
                    //color:'#ededed',
                    //textTransform:'upperCase', 
                    textAlign:'center'
                    }}>
                        <tr>
                        <th>Employee ID</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Email address</th>
                        <th>Hourly Wage</th>
                        <th>Hours</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody className="m-6" style={{textAlign:'center'}}>
                       <tr>
                          <td>1</td>
                          <td>John Miller</td>
                          <td>000000</td>
                          <td>11</td>
                          <td>35</td>
                          <td>jonnmiller@gmail.com</td>
                          <td>
                             <ButtonToolbar>
                                <Button id="edit"className="mr-2" variant="info" 
                                onClick={()=>this.setState({editModalShow:true})}style={{width:70, marginRight:'3px'}}
                                >
                                   Edit
                                </Button>
                                <Button id="delete" className="mr-2"variant = "danger" style={{width:70}}>
                                   Delete
                                </Button>
                             </ButtonToolbar>
                             <EditEmployee show={this.state.editModalShow}
                             onHide = { editModalClose}/>
                          </td>
                       </tr>
                       <tr>
                          <td>2</td>
                          <td>Isla Fisher</td>
                          <td>001100</td>
                          <td>11</td>
                          <td>35</td>
                          <td>islaf@gmail.com</td>
                          <td>
                             <ButtonToolbar>
                                <Button id="edit"className="mr-2" variant="info" 
                                onClick={()=>this.setState({editModalShow:true})}style={{width:70, marginRight:'3px'}}
                                >
                                   Edit
                                </Button>
                                <Button id="delete" className="mr-2"variant = "danger" style={{width:70}}>
                                   Delete
                                </Button>
                             </ButtonToolbar>
                             <EditEmployee show={this.state.editModalShow}
                             onHide = { editModalClose}/>
                          </td>
                       </tr>
                       <tr>
                          <td>3</td>
                          <td>Tom Jackson</td>
                          <td>0033300</td>
                          <td>11</td>
                          <td>35</td>
                          <td>tom@gmail.com</td>
                          <td>
                             <ButtonToolbar>
                                <Button id="edit"className="mr-2" variant="info" 
                                onClick={()=>this.setState({editModalShow:true})}style={{width:70, marginRight:'3px'}}
                                >
                                   Edit
                                </Button>
                                <Button id="delete" className="mr-2"variant = "danger" style={{width:70}}>
                                   Delete
                                </Button>
                             </ButtonToolbar>
                             <EditEmployee show={this.state.editModalShow}
                             onHide = { editModalClose}/>
                          </td>
                       </tr>
                       </tbody>
                       <ButtonToolbar className="add-button">
                          <Button id="add"style={{marginTop:'3px'}}
                          onClick={() => this.setState({addModalShow:true})}>
                          Add Employee
                          </Button>
                          <AddEmployee show={this.state.addModalShow} onHide={addModalClose}>
                          </AddEmployee>
                       </ButtonToolbar>
                       </Table>
         </div>
         </div>
         
      );
   }

}
export default Employee