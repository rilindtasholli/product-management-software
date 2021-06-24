import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import { RiCloseCircleFill } from 'react-icons/ri';


export class LoginAuth extends Component {
  constructor(props) {
    super(props);
  }

  checkPassword(){
    const bcrypt = require('bcryptjs');
    const passwordHash = this.props.passwordHash;
    const passwordInput = this.props.passwordInput;

    return bcrypt.compareSync(passwordInput, passwordHash);

  }

  render() {
    let passwordCorrect = this.checkPassword();

    return (
      <div className="container">
        <Modal
          {...this.props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header style={{ background: '#ab3232' }}>
          <div className="align-self-center mx-auto">
          <RiCloseCircleFill style={{ color: 'white', fontSize: 38 }}/>
            </div>
            
          </Modal.Header>
          <ModalBody>
            <div className="justify-content-center">
                <h2 className='text-center'>{passwordCorrect ? 'Login Success' : 'Wrong Credentials'}</h2>
            </div>
            
          </ModalBody>

          <Modal.Footer>
            <div className="align-self-center mx-auto">
              <Button   variant="danger" onClick={this.props.onHide}>
                Okay
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginAuth;
