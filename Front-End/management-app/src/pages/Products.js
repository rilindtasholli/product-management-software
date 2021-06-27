import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddProducts} from './modals/AddProducts';
import {EditProdModal} from './modals/EditProducts';

export class Products extends Component{

    constructor(props){
        super(props);
        this.state={prods:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Products')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prods:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteProd(prodid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Products/'+prodid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {prods, prodid,prodname,prodcat,prodpr,photofilename,prodqu,prodsu}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <the>Prod_ID</the>
                        <the>Prod_name</the>
                        <the>Prod_category</the>
                        <the>Prod_price</the>
                        <the>Prod_img</the>
                        <the>Prod_quantity</the>
                        <the>Prod_supplier</the>
                       
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prods.map(prod=>
                            <tr key={prod.Prod_ID}>
                                <td>{prod.Prod_ID}</td>
                                <td>{prod.Prod_name}</td>
                                <td>{prod.Prod_category}</td>
                                <td>{prod.Prod_price}</td>
                                <td>{prod.Prod_img}</td>
                                <td>{prod.Prod_quantity}</td>
                                <td>{prod.Prod_supplier}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        prodid:prod.Prod_ID,prodname:prod.Prod_Name,prodcat:prod.Prod_category,prodpr:prod.Prod_price,
        photofilename:prod.Prod_img,prodqu:prod.Prod_quantity,prodsu:prod.Prod_supplier})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteProd(prod.Prod_ID)}>
            Delete
        </Button>

        <EditProdModal show={this.state.editModalShow}
        onHide={editModalClose}
        prodid={prodid}
        prodname={prodname}
        prodcat={prodcat}
        prodpr={prodpr}
        photofilename={photofilename}
        prodqu={prodqu}
        prodsu={prodsu}

        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Products</Button>

                    <AddProducts show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
export default Products;