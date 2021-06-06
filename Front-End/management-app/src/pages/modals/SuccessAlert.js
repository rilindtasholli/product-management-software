import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import { FaCheckCircle } from 'react-icons/fa';


export class SuccessAlert extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={{ background: '#2fb579' }}>
          <div className="align-self-center mx-auto">
          <FaCheckCircle style={{ color: 'white', fontSize: 38 }}/>
            </div>
            
          </Modal.Header>
          <ModalBody>
            <div className="justify-content-center">
                <h2 className='text-center'>{this.props.message}</h2>
            </div>
            
          </ModalBody>

          <Modal.Footer>
            <div className="align-self-center mx-auto">
              <Button   variant="success" onClick={this.props.onHide}>
                Okay
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SuccessAlert;
