import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddSupplier} from './modals/AddSupplier';
import {EditSupplier} from './modals/EditSupplier';
import "./css/Suppliers.css";


export class Suppliers extends Component{

    constructor(props){
        super(props);
        this.state={sups:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("http://localhost:5000/api/Suppliers")
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

    deleteSupp(sup_id){
        if(window.confirm('Are you sure?')){
            fetch("http://localhost:5000/api/Suppliers"+sup_id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {sups,sup_id,sup_name,sup_email,sup_phone,supp_address}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
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
        sup_id:sup.sup_id,sup_name:sup.sup_name,
        sup_email:sup.sup_email,sup_phone:sup.sup_phone,supp_address:sup.supp_address})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteSupp(sup.sup_id)}>
            Delete
        </Button>

        <EditSupplier show={this.state.editModalShow}
        onHide={editModalClose}
    sup_email={sup_email}
    sup_id={sup_id}
    sup_name={sup_name}
    sup_phone={sup_phone}
    supp_address={supp_address}
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
              </Table>
            </div>
    )
    }
    }
    
    export default Suppliers;


