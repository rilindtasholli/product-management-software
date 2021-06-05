import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlertModal } from "./SuccessAlertModal";
import { FailAlertModal } from "./FailAlertModal";

export class EditEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            // loginFormActive: true,
            // fields: {},
            // errors: {},
            successModalShow: false,
            failModalShow: false,
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
        fetch('https://localhost:5001/api/employee',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Emp_id:event.target.Emp_id.value,
                Emp_name:event.target.Emp_name.value,
                Emp_phone:event.target.Emp_phone.value,
                Emp_email:event.target.Emp_email.value,
                Emp_hourly_wage:event.target.Emp_hourly_wage.value,
                Emp_hours:event.target.Emp_hours.value

            })
        })
        .then(res=>res.json())
            .then((result)=>{
                this.setState({ successModalShow: true });
                
            },
            (error)=>{
                this.setState({ failModalShow: true });
              
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
            window.location.reload();
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
                <Form.Group controlId="Emp_id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="number" name="Emp_id" required 
                        placeholder="Emp_id"
                        disabled
                        defaultValue={this.props.empid}/>
                    </Form.Group>

                    <Form.Group controlId="Emp_name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="Emp_name" required 
                        defaultValue={this.props.empname}
                        placeholder="Employee's full name"/>
                    </Form.Group>

                    <Form.Group controlId="Emp_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="Emp_phone" required 
                        defaultValue={this.props.emppphone}
                        placeholder="Employee's phone number"/>
                    </Form.Group>

                    <Form.Group controlId="Emp_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="mail" name="Emp_email" required 
                        defaultValue={this.props.empemail}
                        placeholder="Employee's email address"/>
                    </Form.Group>

                    <Form.Group controlId="Emp_hourly_wage">
                        <Form.Label>Hourly Wage</Form.Label>
                        <Form.Control type="text" name="Emp_hourly_wage" required 
                        defaultValue={this.props.emphw}
                        placeholder="Hourly Wage"/>
                    </Form.Group>

                    <Form.Group controlId="Emp_hours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control type="text" name="Emp_hours" required 
                        defaultValue={this.props.emph}
                        placeholder="Employee's working hours"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit"onClick={() => this.setState({ successModalShow: true })}>
                            Update Employee
                        </Button>
                        <SuccessAlertModal
            show={this.state.successModalShow}
            onHide={successModalClose}
            message='Updated Succesfully!'
          ></SuccessAlertModal>
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