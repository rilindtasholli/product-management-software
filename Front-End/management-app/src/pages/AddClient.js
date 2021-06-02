import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";

export class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state={deps:[]};
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
              Add Client
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
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
                    <Form.Label>ClientEmail</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientEmail"
                      required
                      placeholder="ClientEmail..."
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
                    <Form.Label>ClientCity</Form.Label>
                    <Form.Control
                      type="text"
                      name="ClientCity"
                      required
                      placeholder="ClientCity..."
                    />
                  </Form.Group>

                  <Form.Group controlId="ClientName">
                    <Form.Label>PhoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="Payement"
                      required
                      placeholder="PhoneNumber..."
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button style={{background:'#035bad'}} type="submit">
                      Add Client
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

export default AddClient;
