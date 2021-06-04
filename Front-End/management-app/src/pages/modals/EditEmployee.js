import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import 'bootstrap/dist/css/bootstrap.css';

export class EditEmployee extends Component {
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
          <ModalHeader>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Employee
            </Modal.Title>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Employee_ID">
                    <Form.Label>Employee ID</Form.Label>
                    <Form.Control
                      type="number"
                      name="Employee_ID"
                      required
                      placeholder="Employee_ID"
                    />
                  </Form.Group>

                  <Form.Group controlId="Employee_Name">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="Employee_Name"
                      required
                      placeholder="Employee_Name"
                    />
                  </Form.Group>
                  

                  <Form.Group controlId="DataofJoining">
                    <Form.Label>DataofJoining</Form.Label>
                    <Form.Control
                      type="text"
                      name="DataofJoining"
                      required
                      placeholder="Date of joining"
                    />
                  </Form.Group>
                  <Form.Group controlId="Employee_Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="E-mail"
                      required
                      placeholder="E-mail"
                    />
                  </Form.Group>

                  <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="Phone"
                      required
                      placeholder="Phone"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit"className="mt-2">
                      Update Employee
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
export default EditEmployee;