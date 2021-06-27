import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';
import { SuccessAlert } from "./SuccessAlert";
import { FailAlert } from "./FailAlert";

export class EditCategory extends Component{
    constructor(props){
        super(props);
        this.state = {

            successModalShow: false,
            failModalShow: false,
            alertMessage:null
           
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }


    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/category/'+this.props.catname,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                cat_name: event.target.cat_name.value
            })
        })
        .then(res=>res.json())
            .then((result)=>{
                
                this.setState({ alertMessage:"Updated Successfully!",successModalShow: true });
                
            },
            (error)=>{
                this.setState({ alertMessage:"Update Failed!", failModalShow: true });
              
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
            Edit Employee
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="cat_name">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" name="cat_name" required 
                        placeholder="cat_name"
                        
                        defaultValue={this.props.catname}/>
                    </Form.Group>

                    
                    <Form.Group>
                        <Button variant="primary" type="submit"onClick={() => this.handleSumbit}>
                            Update Category
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
export default EditCategory;