import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import { BsFillExclamationCircleFill } from 'react-icons/bs';


export class ConfirmAlertModal extends Component {
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
          <Modal.Header style={{ background: '#d99d3d' }}>
          <div className="align-self-center mx-auto">
          <BsFillExclamationCircleFill style={{ color: 'white', fontSize: 38 }}/>
            </div>
            
          </Modal.Header>
          <ModalBody>
            <div className="justify-content-center">
                <h2 className='text-center'>{this.props.message}</h2>
            </div>
            
          </ModalBody>

          <Modal.Footer> 
            <div className="align-self-center mx-auto">
              <Button   variant="success" size="lg" onClick={this.props.onClickYes}>
                Yes
              </Button>
            </div>
            <div className="align-self-center mx-auto" >
              <Button   variant="danger" size="md" onClick={this.props.onHide}>
                Cancel
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ConfirmAlertModal;
