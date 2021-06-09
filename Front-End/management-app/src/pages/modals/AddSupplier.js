import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddSupplier extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
   
    }



    componentDidMount(){
        fetch(process.env.REACT_APP_API)
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Supplier',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              
            EmriiKompanise:event.target.EmriiKompanise.value,
              
                DataeFurnizimit:event.target.DataeFurnizimit.value,
              

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


    render(){
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
          Supplier Data
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
               

                    <Form.Group controlId="Supplier Name">
                        <Form.Label>Suppliers Name</Form.Label>
                        <Form.Control type="text" name="Supplier Name" required
                        placeholder="Supplier Name"/>
                    </Form.Group>
                   

                    <Form.Group controlId="Address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="Address" required
                        placeholder="Address"/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="Email" required
                        placeholder="Email "/>
                    </Form.Group>

                    <Form.Group controlId=" Phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="Phone" required
                        placeholder="Phone"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                           Add Supplier
                        </Button>
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
     
      export default AddSupplier;