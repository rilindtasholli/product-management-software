import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { SuccessAlertModal } from "./SuccessAlertModal";
import { FailAlertModal } from "./FailAlertModal";

export class EditSupplier extends Component{
    constructor(props){
        super(props);

        this.state = {
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
            alertMessage:null
        }
    this.handleSubmit=this.handleSubmit.bind(this);
    
}

handleSubmit(event){
    event.preventDefault();
fetch('http://localhost:5000/api/suppliers',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          
       sup_id:event.target.sup_id.value,
       sup_name:event.target.sup_name.value,
       sup_email:event.target.sup_email.value,
       sup_phone:event.target.sup_phone.value,
       supp_address:event.target.supp_address.value,
    })
})
.then(res=>res.json())
.then((result)=>{
    this.setState({ alertMessage:"Success",successModalShow: true });
    
},
(error)=>{
    this.setState({ alertMessage:"Failed",failModalShow: true });
  
})
}


    render(){
        let successModalClose = () => {
            this.setState({ successModalShow: false });
            //window.location.reload();
          }
  
          let failModalClose = () => this.setState({ failModalShow: false });
        
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
                <Form.Group controlId="sup_id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="sup_id" required 
                        placeholder="Supplier ID"
                        disabled
                        defaultValue={this.props.supid}/>
                    </Form.Group>

                    <Form.Group controlId="sup_name">
                        <Form.Label>Suppliers Name</Form.Label>
                        <Form.Control type="text" name="sup_name" required
                         defaultValue={this.props.supname}
                        placeholder="Supplier Name"/>
                    </Form.Group>
                   

                    <Form.Group controlId="supp_address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="supp_address" required
                         defaultValue={this.props.supaddress}
                        placeholder="Address"/>
                    </Form.Group>

                    <Form.Group controlId="sup_email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="sup_email" required
                         defaultValue={this.props.supemail}
                        placeholder="Email "/>
                    </Form.Group>

                    <Form.Group controlId=" sup_phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="sup_phone" required
                         defaultValue={this.props.supphone}
                        placeholder="Phone"/>
                    </Form.Group>
                        
              

                    <Form.Group>
                        <Button variant="primary" type="submit">
                       Update
                        </Button>
                        <SuccessAlertModal
            show={this.state.successModalShow}
            onHide={successModalClose}
            message={this.state.alertMessage}
          ></SuccessAlertModal>
          <FailAlertModal
            show={this.state.failModalShow}
            onHide={failModalClose}
            message={this.state.alertMessage}
          ></FailAlertModal>
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