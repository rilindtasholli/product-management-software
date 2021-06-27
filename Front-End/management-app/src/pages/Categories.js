import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCategory} from './modals/AddCategory';
import {EditCategory} from './modals/EditCategory';
import './css/Employee.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SuccessAlert } from "./modals/SuccessAlert";
import { FailAlert } from "./modals/FailAlert";
import { ConfirmAlert } from "./modals/ConfirmAlert";

export class Categories extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            cats:[], addModalShow:false, editModalShow:false,
           
            successModalShow: false,
            failModalShow: false,
            confirmModalShow: false,
            alertMessage:null
        }
    }

    refreshList(){
        fetch('http://localhost:5000/api/category')
        .then(response=>response.json())
        .then(data=>{
            this.setState({cats:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteCat(name){
        this.setState({ confirmModalShow: false });
  
        fetch('http://localhost:5000/api/category/'+name,{
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
        const{cats, catname}=this.state;
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
                        <th>Category Name</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cats.map(cat=>
                            <tr key={cat.cat_name}>
                                <td>{cat.cat_name}</td>
                                
                                <td>
<ButtonToolbar style={{display:'block'}}>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true, catname:cat.cat_name})}
    style={{width: 70}}>
        Edit</Button>
        <Button className="mr-2" variant="danger" onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, catname:cat.cat_name})}
     style={{width:70}}>
        Delete</Button>
       
</ButtonToolbar>        
                                </td>
                            </tr>)}
                    </tbody>
                    <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Category</Button>

                    
                </ButtonToolbar>
                </Table>


                <AddCategory show={this.state.addModalShow}
                    onHide={addModalClose}/>

                    
                <EditCategory show={this.state.editModalShow}
                    onHide={editModalClose}
                    
                    catname={catname}
                  />

                <FailAlert
            show={this.state.failModalShow}
            onHide={failModalClose}
            message={this.state.alertMessage}
          />
          <ConfirmAlert
            show={this.state.confirmModalShow}
            onHide={confirmModalClose}
            message={this.state.alertMessage}
            onClickYes={()=>this.deleteCat(this.state.catname)}
          /> 
            </div>
        )
    }
}

export default Categories
