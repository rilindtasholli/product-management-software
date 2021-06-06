import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlert } from "./SuccessAlert";
import { FailAlert } from "./FailAlert";

export class AddEmployee extends Component{
    constructor(props){
        super(props);
        //this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
            alertMessage:null
            // confirmModalShow: false
            
        }
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }



    

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/employee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                emp_name: event.target.emp_name.value,
                emp_phone: event.target.emp_phone.value,
                emp_email: event.target.emp_email.value,
                emp_hourly_wage: event.target.emp_hourly_wage.value,
                emp_hours: event.target.emp_hours.value
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



    render(){
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
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Employee
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="emp_name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="emp_name" 
                        required 
                        placeholder="Enter employee's full name"
                        />
                    </Form.Group>


                    <Form.Group controlId="emp_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="emp_phone" required 
                        placeholder="Enter employee's phone number"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="emp_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="emp_email" 
                        placeholder="Enter employee's email"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="emp_hourly_wage">
                        <Form.Label>Hourly Wage</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="emp_hourly_wage" required 
                        placeholder="Enter employee's hourly wage"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="emp_hours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="emp_hours" required 
                        placeholder="Enter employee's working hours"
                        
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={() => this.handleSumbit}>
                            Add Employee
                        </Button>
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
                    </Form.Group>
                </Form>
            </Col>

            {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}export default AddEmployee