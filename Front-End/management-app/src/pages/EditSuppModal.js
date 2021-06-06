import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditSupplier extends Component{
    constructor(props){
        super(props);
        this.state={sups:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
      
    }


    componentDidMount(){
        fetch(process.env.REACT_APP_API)
        .then(response=>response.json())
        .then(data=>{
            this.setState({sups:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'suppliers',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                sup_id:event.target.sup_id.value,
                SupplierName:event.target.SupplierName.value,
            
            

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


 

   
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Supplier
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="SupplierID">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="SupplierID" required 
                        placeholder="Supplier ID"
                        disabled
                        defaultValue={this.props.suppid}/>
                    </Form.Group>

                    <Form.Group controlId="SuppliereName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="SupplierName" required 
                        defaultValue={this.props.SupplierName}
                        placeholder="Supplier Name"/>
                    </Form.Group>


                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="Address" required
                        placeholder="Address"/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required
                        placeholder="Email "/>
                    </Form.Group>

                    <Form.Group controlId=" Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="Phone" required
                        placeholder="Phone"/>
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                       Update
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}
export default EditSupplier;