import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";


export class ConfirmDeleteModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Modal >
  <Modal.Header>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>One fine body...</Modal.Body>

  <Modal.Footer>
    <Button>Close</Button>
    <Button bsStyle="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
      </div>
    );
  }
}

export default ConfirmDeleteModal;
