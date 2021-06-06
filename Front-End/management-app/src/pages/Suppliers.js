import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddSupplier} from './modals/AddSupplier';
import {EditSupplier} from './modals/EditSupplier';
import './css/Suppliers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessAlertModal } from "./modals/SuccessAlertModal";
import { FailAlertModal } from "./modals/FailAlertModal";
import { ConfirmAlertModal } from "./modals/ConfirmAlertModal";


export class Suppliers extends Component{

    constructor(props){
        super(props);
       // this.state={sups:[], addModalShow:false, editModalShow:false}
       this.state = {
        sups:[], addModalShow:false, editModalShow:false,
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
        fetch('http://localhost:5000/api/suppliers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({sups:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSup(id){
        this.setState({ confirmModalShow: false });
        
        fetch('http://localhost:5000/api/suppliers/'+id,{
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
      render() {
    
        const {sups,supid,supname,supemail,supphone,supaddress}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let failModalClose = () => this.setState({ failModalShow: false });
        let confirmModalClose = () => this.setState({ confirmModalShow: false });
        return(
            <div className="main-content-suppliers">
            <Table className=" w-75 m-auto  font-weight-bold" striped  size="md">
                   

                    <thead style={{
              background: "	#002e58",
              color: "white",
              fontWeight: "bold",
            
            }} >
                        <tr>
                            <th style={{ width: 150 }}>ID</th>
                        <th >Supplier Name</th>
                        <th >Email</th>
                        <th >Address</th>
                        <th >Phone</th>
                        <th style={{ width: 250 }} >Options</th>
                    </tr>
                    </thead>




                  <tbody>
                
                    {sups.map(sup=>
                            <tr key={sup.sup_id}>
                                <td>{sup.sup_id}</td>
                                <td>{sup.sup_name}</td>
                                <td>{sup.sup_email}</td>
                                <td>{sup.sup_phone}</td>
                                <td>{sup.supp_address}</td>
                                <td>
             
      <ButtonToolbar>

    <Button className="mr-2" variant="info"
        style={{ background: "#99ccff", width: 60}}
    onClick={()=>this.setState({editModalShow:true,
    supid:sup.sup_id,supname:sup.sup_name,
        supemail:sup.sup_email,supphone:sup.sup_phone,supaddress:sup.supp_address})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger" onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, supid:sup.sup_id})}
     style={{width:70}}>
            Delete
        </Button>

        <EditSupplier show={this.state.editModalShow}
        onHide={editModalClose}
    supemail={supemail}
    supid={supid}
    supname={supname}
    supphone={supphone}
    supaddress={supaddress}
/>
</ButtonToolbar>
    </td>
  
  </tr>)}
   </tbody>
                <ButtonToolbar className="add-button">

                    <Button
                     style={{background:'#99ccff'}}
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Supplier
                    </Button>
                 
                    <AddSupplier  show={this.state.addModalShow}
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
            onClickYes={()=>this.deleteSup(this.state.supid)}
          ></ConfirmAlertModal> 
              </Table>
            </div>
    )
    }
    }

    export default Suppliers;