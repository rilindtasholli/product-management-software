import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSuppModal} from './AddSuppModal';
import {EditSuppModal} from './EditSuppModal';



export class Suppliers extends Component{

    constructor(props){
        super(props);
        this.state={supps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'suppliers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({supps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(suppid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'suppliers/'+suppid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {supps,SupplierId, SupplierName
            ,Address,Email,Phone}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className="main-content-suppliers" className="table">
              <Table className=" w-75 m-auto  font-weight-bold" striped  size="md">
                   
                    <thead 
            style={{
              background: "	#002e58",
              color: "white",
              fontWeight: "bold",
            
            }}
          >
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
                  
            <tr>
              <td>1</td>
              <td>Viva</td>
              <td>vivaks@gmail.com </td>
              <td>Prishtine</td>
              <td>045200200</td>
              <td>
                <ButtonToolbar>
                  <Button
                    style={{ background: "#99ccff", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 60 }}
                    variant="danger"

                  >
                    Delete
                  </Button>
                </ButtonToolbar>
              <EditSuppModal
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>
                        {supps.map(supp=>
                            <tr key={supp.SupplierId}>
                                <td>{supp.SupplierId}</td>
                                <td>{supp.SupplierName}</td>
                                <td>{supp.Email}</td>
                                <td>{supp.Phone}</td>
                                <td>{supp.Address}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
        style={{ background: "#99ccff", width: 60}}
    onClick={()=>this.setState({editModalShow:true,
        suppid:supp.SupplierId,suppname:supp.SupplierName,
        Email:supp.Email,Phone:supp.Phone,Address:supp.Address})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteSupp(supp.SupplierId)}>
            Delete
        </Button>

        <EditSuppModal show={this.state.editModalShow}
        onHide={editModalClose}
        SupplierId={SupplierId}
      SupplierName={SupplierName}
        Email={Email}
        Address={Address}
        Phone={Phone}
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
                 
                    <AddSuppModal  show={this.state.addModalShow}
                    onHide={addModalClose}/>
                
                </ButtonToolbar>
                </Table>
            </div>
        )
    }
}
export default Suppliers;   



