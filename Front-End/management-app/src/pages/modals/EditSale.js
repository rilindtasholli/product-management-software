import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlertModal } from "./SuccessAlertModal";
import { FailAlertModal } from "./FailAlertModal";

export class EditSale extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            successModalShow: false,
            failModalShow: false,
            alertMessage:null
            // confirmModalShow: false
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
            fetch('http://localhost:5000/api/sales',{
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    sal_id:event.target.sal_id.value,
                    sal_client:event.target.sal_client.value,
                    cli_name:event.target.cli_name.value,
                    cli_phone:event.target.cli_phone.value,
                    sal_date:event.target.sal_date.value,
                    total_price:event.target.total_price.value  
                })
            })
            .then(res=>res.json())
                .then((result)=>{
                    this.setState({ alertMessage:"Success",successModalShow: true });
                    
                },
                (error)=>{
                    this.setState({ alertMessage:"Failed",failModalShow: true });
                  
                })    }

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
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Sale
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="sal_id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" name="sal_id" required 
                        placeholder="sal_id"
                        disabled
                        defaultValue={this.props.salid}
                        onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="sal_client">
                        <Form.Label>Client's ID</Form.Label>
                        <Form.Control type="number" name="sal_client" required 
                        placeholder="sal_client"
                        defaultValue={this.props.salclient}
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="cli_name">
                        <Form.Label>Client's name</Form.Label>
                        <Form.Control type="text" name="cli_name" required 
                        defaultValue={this.props.cliname}
                        placeholder="Client's name"
                        disabled
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["cli_name"]}</span>
                    </Form.Group>

                    <Form.Group controlId="cli_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="cli_phone" required 
                        defaultValue={this.props.cliphone}
                        placeholder="Client's phone number"
                        disabled
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["cli_phone"]}</span>
                    </Form.Group>

                    <Form.Group controlId="sal_date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="sal_date" required 
                        defaultValue={this.props.saldatel}
                        placeholder="Date"
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["sal_date"]}</span>
                    </Form.Group>

                    <Form.Group controlId="Total_price">
                        <Form.Label>Total Price</Form.Label>
                        <Form.Control type="text" name="total_price" required 
                        defaultValue={this.props.totalprice}
                        placeholder="Total_price"
                        disabled
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit"onClick={() => this.handleSumbit}>
                            Update Sale
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
export default EditSale;