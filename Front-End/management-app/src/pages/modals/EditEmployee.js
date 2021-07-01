import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlertModal } from "./SuccessAlertModal";
import { FailAlertModal } from "./FailAlertModal";

export class EditEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {},
            successModalShow: false,
            failModalShow: false,
            alertMessage:null
            // confirmModalShow: false
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleValidation(){
        let fields  = this.state.fields;
        let errors = {};
        let formIsValid = true;
        //Name
        if(typeof fields["Emp_name"] !== "undefined"){
            if(!fields["Emp_name"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["Emp_name"] = "Please enter the name correctly";
            }        
         }
         //Email
         if(typeof fields["Emp_email"] !== "undefined"){
            let lastAtPos = fields["Emp_email"].lastIndexOf('@');
            let lastDotPos = fields["Emp_email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && 
                fields["Emp_email"].indexOf('@@') == -1 && 
                lastDotPos > 2 && 
                (fields["Emp_email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["Emp_email"] = "Email is not valid";
             }
        }
        //Phone
        if (typeof fields["Emp_phone"] !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(fields["Emp_phone"])) {
                formIsValid = false;
              errors["Emp_phone"] = "Please enter only numbers.";
            }else if(fields["Emp_phone"].length != 9){
                formIsValid = false;
              errors["Emp_phone"] = "Please enter valid phone number.";
            }
          }
        this.setState({errors: errors});
           return formIsValid;
    }
    handleChange(e){         
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;        
        this.setState({fields});
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.handleValidation()){
            let fields ={};
            fields["Emp_name"]="";
            fields["Emp_phone"]="";
            fields["Emp_email"]="";
            this.setState({fields:fields});
            fetch('http://localhost:5000/api/employee',{
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
                    this.setState({ alertMessage:"Success",successModalShow: true });
                    
                },
                (error)=>{
                    this.setState({ alertMessage:"Failed",failModalShow: true });
                  
                })
        }
    }

    render(){
        let successModalClose = () => {
            this.setState({ successModalShow: false });
            //window.location.reload();
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
                        defaultValue={this.props.empid}
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="Emp_name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="Emp_name" required 
                        defaultValue={this.props.empname}
                        placeholder="Employee's full name"
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["Emp_name"]}</span>
                    </Form.Group>

                    <Form.Group controlId="Emp_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="Emp_phone" required 
                        defaultValue={this.props.empphone}
                        placeholder="Employee's phone number"
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["Emp_phone"]}</span>
                    </Form.Group>

                    <Form.Group controlId="Emp_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="mail" name="Emp_email" required 
                        defaultValue={this.props.empemail}
                        placeholder="Employee's email address"
                        onChange={this.handleChange}/>
                        <span style={{color: "red"}}>{this.state.errors["Emp_email"]}</span>
                    </Form.Group>

                    <Form.Group controlId="Emp_hourly_wage">
                        <Form.Label>Hourly Wage</Form.Label>
                        <Form.Control type="text" name="Emp_hourly_wage" required 
                        defaultValue={this.props.emphw}
                        placeholder="Hourly Wage"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="Emp_hours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control type="text" name="Emp_hours" required 
                        defaultValue={this.props.emph}
                        placeholder="Employee's working hours"
                        onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit"onClick={() => this.handleSumbit}>
                            Update Employee
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
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}
export default EditEmployee;