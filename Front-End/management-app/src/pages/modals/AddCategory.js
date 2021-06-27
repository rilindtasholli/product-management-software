import React, { Component } from "react";
import { Modal, ModalBody, Button, Row, Col, Form } from "react-bootstrap";
import { SuccessAlert } from "./SuccessAlert";
import { FailAlert } from "./FailAlert";

export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state={categories:[], successModalShow: false, failModalShow: false,alertMessage:null}
    this.handleSubmit=this.handleSubmit.bind(this);
  }



  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:5000/api/category',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },

      body:JSON.stringify({
        cat_name:event.target.cat_name.value
      })

    })

    .then(res=>res.json())
    .then((result)=>{
      this.setState({ alertMessage:"Added Successfully!",successModalShow: true });
    },
    (error)=>{
      this.setState({ alertMessage:"Add Failed!", failModalShow: true});
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
              Add Category
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}
                style={{fontWeight:'bold'}}>
                  <Form.Group controlId="ClientName">
                    <Form.Label>CategoryName</Form.Label>
                    <Form.Control
                      type="text"
                      name="cat_name"
                      required
                      placeholder="Category Name..."
                    />
                  </Form.Group>


                  <Form.Group>
                    <Button style={{background:'#035bad'}} type="submit" onClick={this.props.onHide}>
                      Add Category
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

export default AddCategory;
