import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";

export class EditClient extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:5000/api/clients',{
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
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })

  }
  render() {
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
                <Form onSubmit={this.handleSubmit}>
                 
                <Form.Group controlId="ClientId">
                    <Form.Label>ClientId</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientId"
                      required
                      placeholder="ClientId..."
                      disabled
                      defaultValue={this.props.cli_id}
                    />
                  </Form.Group>

                 
                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientName</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientName"
                      required
                      placeholder="ClientName..."
                      defaultValue={this.props.cli_name}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientEmail</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientEmail"
                      required
                      placeholder="ClientEmail..."
                      defaultValue={this.props.cli_email}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientAddress</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientAddress"
                      required
                      placeholder="ClientAddress..."
                      defaultValue={this.props.cli_address}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientCity</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientCity"
                      required
                      placeholder="ClientCity..."
                      defaultValue={this.props.cli_city}
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="PhoneNumber"
                      required
                      placeholder="PhoneNumber..."
                      defaultValue={this.props.cli_phone}
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
      </div>
    );
  }
}

export default EditClient;
