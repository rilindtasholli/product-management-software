import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class AddEmployee extends Component{
    constructor(props){
        super(props);
        //this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    // photofilename = "upload.png";
    // imagesrc = 'https://localhost:5001/Photos/'+this.photofilename;
/* 
    componentDidMount(){
        fetch('https://localhost:5001/api/departament')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    } */

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:5001/api/employee',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //Employee_ID:null,
                //Emp_id:event.target.Emp_id.v,
                Emp_name:event.target.Emp_name.value,
                Emp_phone:event.target.Emp_phone.value,
                Emp_email:event.target.Emp_email.value,
                Emp_hourly_wage:event.target.Emp_hourly_wage.value,
                Emp_hours:event.target.Emp_hours.value

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
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
                <Form.Group controlId="Emp_name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Emp_name" 
                        required 
                        placeholder="Enter employee's full name"
                        />
                    </Form.Group>


                    <Form.Group controlId="Emp_phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Emp_phone" required 
                        placeholder="Enter employee's phone number"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="Emp_email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Emp_email" 
                        placeholder="Enter employee's email"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="Emp_hourly_wage">
                        <Form.Label>Hourly Wage</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Emp_hourly_wage" required 
                        placeholder="Enter employee's hourly wage"
                        
                        />
                    </Form.Group>

                    <Form.Group controlId="Emp_hours">
                        <Form.Label>Hours</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="Emp_hours" required 
                        placeholder="Enter employee's working hours"
                        
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Employee
                        </Button>
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
