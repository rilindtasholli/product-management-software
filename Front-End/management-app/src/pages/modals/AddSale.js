import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import MultiSelect from "@kenshooui/react-multi-select";
import { SuccessAlertModal } from "./SuccessAlertModal";
import { FailAlertModal } from "./FailAlertModal";

export class AddSale extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      clients: [],
      products: [],
      fields: {},
      errors: {},
      successModalShow: false,
      failModalShow: false,
      alertMessage: null,
      porductSize: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //ni metode per me marre sales te fundit per me marre id
  multiSelectEvent = (input) => (e) => {
    let temp = [];
    temp = this.state.products;
    let value = e.target.value;
    let remove = false;

    if (temp.length === 1 && temp[0] === value) {
      temp = [];
    } else {
      //remove if existing
      for (var i = 0; i < temp.length; i++) {
        var name = temp[i];
        if (name === value) {
          remove = true;
          break;
        }
      }

      if (remove === true) {
        const index = temp.indexOf(value);
        if (index > -1) {
          temp.splice(index, 1);
        }
        //add
      } else {
        temp.push(e.target.value);
      }
    }
    if (input === "data") this.setState({ data: temp });
    else this.setState({ data2: temp });
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/clients")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ clients: data });
      });
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/sales", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sal_client: event.target.sal_client.value,
        cli_name: event.target.cli_name.value,
        cli_phone: event.target.cli_phone.value,
        sal_date: event.target.sal_date.value,
        total_price: event.target.total_price.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ alertMessage: "Success", successModalShow: true });
        },
        (error) => {
          this.setState({
            alertMessage: "Failed" + error,
            failModalShow: true,
          });
        }
      );
  }
  render() {
    const { selectedItems } = this.state;
    let successModalClose = () => {
      this.setState({ successModalShow: false });
      //window.location.reload();
    };

    let failModalClose = () => this.setState({ failModalShow: false });
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create a new sale
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="Client">
                    <Form.Label>Client</Form.Label>
                    <Form.Control as="select">
                      {this.state.clients.map((client) => (
                        <option key={client.cli_id}>{client.cli_name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  {/* <Form.Group controlId="Products">
                        <Form.Label>Product</Form.Label>
                        <Form.Control as="select">
                        {this.state.products.map(product=>
                            <option key={product.prod_id}>{product.prod_name, product.prod_price}</option>)}
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group controlId="Products">
                        <Form.Label>Products</Form.Label>
                        <Form.Control
                    as="select"
                     multiple
                     onClick={this.multiSelectEvent("products")}
                  >
                       {this.state.products.map((product) => (
                        <option key={product.prod_id}>{product.prod_name}</option>
                      ))}
                  </Form.Control>
              </Form.Group>

                  <Form.Group controlId="cli_phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="Emp_phone"
                      required
                      placeholder="Enter client's phone number"
                      value={this.state.fields.cli_phone}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["Emp_phone"]}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="sal_date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="sal_date"
                      placeholder="Enter date"
                      value={this.state.fields.sal_date}
                      onChange={this.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["Emp_email"]}
                    </span>
                  </Form.Group>

                  <Form.Group controlId="total_price">
                    <Form.Label>Total Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="total_price"
                      required
                      placeholder="Enter total price"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => this.handleSumbit}
                    >
                      Create
                    </Button>
                    <SuccessAlertModal
                      show={this.state.successModalShow}
                      onHide={successModalClose}
                      message={this.state.alertMessage}
                    ></SuccessAlertModal>
                    <FailAlertModal
                      show={this.state.failModalShow}
                      onHide={failModalClose}
                      message={this.state.alertMessage}
                    ></FailAlertModal>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

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
export default AddSale;
