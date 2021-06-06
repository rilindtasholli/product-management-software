import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import { SuccessAlert } from "./SuccessAlert";
import { FailAlert } from "./FailAlert";

export class EditClient extends Component {
  constructor(props) {
    super(props);
    this.state={client:[],  successModalShow: false, failModalShow: false,alertMessage:null};
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:5000/api/client',{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            cli_id:event.target.cli_id.value,
            cli_name:event.target.cli_name.value,
            cli_email:event.target.cli_email.value,
            cli_address:event.target.cli_address.value,
            cli_city:event.target.cli_city.value,
            cli_phone:event.target.cli_phone.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
      this.setState({ alertMessage:"Updated Successfully!",successModalShow: true });
    },
    (error)=>{
      this.setState({ alertMessage:"Updated Failed!", failModalShow: true});
    })
}

  render() {

    let successModalClose = () => {
      this.setState({ successModalShow: false });
      this.props.onHide(true);
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
              Edit Client
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}
                style={{fontWeight:'bold'}}>
                 
                <Form.Group controlId="ClientId">
                    <Form.Label>ClientId</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_id"
                      required
                      placeholder="ClientId..."
                      disabled
                      defaultValue={this.props.cliId}
                    />
                  </Form.Group>

                 
                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientName</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_name"
                      required
                      placeholder="ClientName..."
                      defaultValue={this.props.cliName}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientEmail</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_email"
                      required
                      placeholder="ClientEmail..."
                      defaultValue={this.props.cliEmail}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientAddress</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_address"
                      required
                      placeholder="ClientAddress..."
                      defaultValue={this.props.cliAddress}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientCity</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_city"
                      required
                      placeholder="ClientCity..."
                      defaultValue={this.props.cliCity}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientPhone</Form.Label>
                    <Form.Control
                      type="text"
                      name="cli_phone"
                      required
                      placeholder="ClientPhone..."
                      defaultValue={this.props.cliPhone}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button style={{background:'#035bad'}} type="submit">
                      Update Client
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </ModalBody>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <SuccessAlert
            show={this.state.successModalShow}
            onHide={successModalClose}
            message={this.state.alertMessage}
          />
          <FailAlert
            show={this.state.failModalShow}
            onHide={failModalClose}
            message={this.state.alertMessage}
          />
      </div>
    );
  }
}

export default EditClient;
