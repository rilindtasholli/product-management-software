import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlert } from "./SuccessAlert";
import { FailAlert } from "./FailAlert";

export class EditEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
            alertMessage:null
            // confirmModalShow: false
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "upload.png";
    // imagesrc = 'https://localhost:5001/Photos/'+this.photofilename;

    // componentDidMount(){
    //     fetch('https://localhost:5001/api/departament')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         this.setState({deps:data});
    //     });
    // }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/employee',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                emp_id:event.target.emp_id.value,
                emp_name:event.target.emp_name.value,
                emp_phone:event.target.emp_phone.value,
                emp_email:event.target.emp_email.value,
                emp_hourly_wage:event.target.emp_hourly_wage.value,
                emp_hours:event.target.emp_hours.value

            })
        })
        .then(res=>res.json())
            .then((result)=>{
                
                this.setState({ alertMessage:"Added Successfully!",successModalShow: true });
                
            },
            (error)=>{
                this.setState({ alertMessage:"Add Failed!", failModalShow: true });
              
            })
    }


    // handleFileSelected(event){
    //     event.preventDefault();
    //     this.photofilename=event.target.files[0].name;
    //     const formData = new FormData();
    //     formData.append(
    //         "myFile",
    //         event.target.files[0],
    //         event.target.files[0].name
    //     );

    //     fetch('https://localhost:5001/api/Employee/SaveFile',{
    //         method:'POST',
    //         body:formData
    //     })
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         this.imagesrc='https://localhost:5001/Photos/'+result;
    //     },
    //     (error)=>{
    //         alert('Failed');
    //     })
        
    // }

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
            Edit Employee
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="emp_id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" name="emp_id" required 
                        placeholder="emp_id"
                        disabled
                        defaultValue={this.props.empid}/>
                    </Form.Group>

                    <Form.Group controlId="emp_name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="emp_name" required 
                        defaultValue={this.props.empname}
                        placeholder="Employee's full name"/>
                    </Form.Group>

                    <Form.Group controlId="emp_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="emp_phone" required 
                        defaultValue={this.props.empphone}
                        placeholder="Employee's phone number"/>
                    </Form.Group>

                    <Form.Group controlId="emp_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="mail" name="emp_email" required 
                        defaultValue={this.props.empemail}
                        placeholder="Employee's email address"/>
                    </Form.Group>

                    <Form.Group controlId="emp_hourly_wage">
                        <Form.Label>Hourly Wage</Form.Label>
                        <Form.Control type="text" name="emp_hourly_wage" required 
                        defaultValue={this.props.emphw}
                        placeholder="Hourly Wage"/>
                    </Form.Group>

                    <Form.Group controlId="emp_hours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control type="text" name="emp_hours" required 
                        defaultValue={this.props.emph}
                        placeholder="Employee's working hours"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit"onClick={() => this.handleSumbit}>
                            Update Employee
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
                <Image width="200px" height="200px" 
                src={'https://localhost:5001/Photos/'+this.props.photofilename}/>
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

}
export default EditEmployee;