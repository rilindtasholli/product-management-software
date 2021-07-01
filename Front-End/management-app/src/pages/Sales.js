import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSale} from './modals/AddSale';
import {EditSale} from './modals/EditSale';
import './css/Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessAlertModal } from "./modals/SuccessAlertModal";
import { FailAlertModal } from "./modals/FailAlertModal";
import { ConfirmAlertModal } from "./modals/ConfirmAlertModal";

export class Sales extends Component{
    constructor(props){
        super(props);
        this.state = {
            sales:[], addModalShow:false, editModalShow:false,
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
            confirmModalShow: false,
            alertMessage:null,
            selectedItems:[]
        }    }

    refreshList(){
        fetch('http://localhost:5000/api/sales')
        .then(response=>response.json())
        .then(data=>{
            this.setState({sales:data});        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteEmp(id){
        this.setState({ confirmModalShow: false });
  
        fetch('http://localhost:5000/api/sales/'+id,{
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
        const{sales, salid, salclient, cliname, cliphone,saldate,totalprice}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let failModalClose = () => this.setState({ failModalShow: false });
        let confirmModalClose = () => this.setState({ confirmModalShow: false });
        return (
            <div class="div">
                <Table className=" w-75 m-auto" striped  size="md" style={{textAlign:'center'}} class="table1">
                    <thead class="thead" style={{background:'rgb(16,62,105)', 
                                                 color:'rgb(237,237,237)',
                                                 alignContent:'center'
                                                 }}>
                        <tr>
                        <th>ID</th>
                        <th>Client's ID</th>
                        <th>Client's Name</th>
                        <th>Client's Phone Number</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sal=>
                            <tr key={sal.sal_id}>
                                <td>{sal.sal_id}</td>
                                <td>{sal.sal_client}</td>
                                <td>{sal.cli_name}</td>
                                <td>{sal.cli_phone}</td>
                                <td>{sal.sal_date}</td>
                                <td>{sal.total_price}</td>
                                <td>
 <ButtonToolbar style={{display:'block'}}>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true, salid:sal.sal_id, salclient:sal.sal_client,cliname:sal.cli_name, cliphone:sal.cli_phone,saldate:sal.sal_date, totalprice:sal.total_price})}
    style={{width: 70}}>
        Edit</Button>
        <Button className="mr-2" variant="danger" onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, salid:sal.sal_id,})}
     style={{width:70}}>
        Delete</Button>
        <EditSale show={this.state.editModalShow}
                    onHide={editModalClose}
                    salid={salid}
                    salclient={salclient}
                    cliname={cliname}
                    cliphone={cliphone}
                    saldate={saldate}
                    totalprice={totalprice}
                    />
</ButtonToolbar>        
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar className="ml-5">
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Create a new Sale</Button>

                    <AddSale show={this.state.addModalShow}
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
            onClickYes={()=>this.deleteEmp(this.state.salid)}
          ></ConfirmAlertModal> 
            </div>
        )
    }
}export default Sales
