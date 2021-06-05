import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";


export class EditClient extends Component {
  constructor(props) {
    super(props);
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
                    />
                  </Form.Group>

                 
                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientName</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientName"
                      required
                      placeholder="ClientName..."
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>ClientAddress</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientAddress"
                      required
                      placeholder="ClientAddress..."
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="PhoneNumber"
                      required
                      placeholder="PhoneNumber..."
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
