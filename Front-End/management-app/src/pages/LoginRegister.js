import React, { Component } from 'react';
// import { Button, ButtonToolbar } from "react-bootstrap";
import {RiAccountPinCircleFill} from 'react-icons/ri';
import {ImUserPlus} from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';

import './css/LoginRegister.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

//import { AddClient } from "./AddClient";
import { SuccessAlert } from "./modals/SuccessAlert";
import { FailAlert } from "./modals/FailAlert";
import { ConfirmAlert } from "./modals/ConfirmAlert";



export class LoginRegister extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            loginFormActive: true,
            fields: {},
            errors: {},
            successModalShow: false,
            failModalShow: false,
        }

        this.handleRegister=this.handleRegister.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    

     handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;


      if (typeof fields["firstname"] !== "undefined") {
        if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter a valid name.";
        }
      }


      if (typeof fields["lastname"] !== "undefined") {
        if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter a valid name.";
        }
      }

     if (typeof fields["phone"] !== "undefined") {
        if (!fields["phone"].match(/^\d+$/) || fields["phone"].length < 8 || fields["phone"].length > 10 ) {
          formIsValid = false;
          errors["phone"] = "*Please enter a valid phone number";
        }
      }

      if (typeof fields["code"] !== "undefined") {
        if (!fields["code"].match(/^\d+$/)) {
          formIsValid = false;
          errors["phone"] = "*Please enter a valid phone number.";
        }
      }
      

      if (typeof fields["email"] !== "email") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter a valid email.";
        }
      }
    
    if (typeof fields["confirmpassword"] !== "undefined") {
        if (fields["confirmpassword"] != fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please make sure your passwords match.";
        }
      }
    

      if (typeof fields["password"] !== "undefined") {
        if (fields["password"].length < 8) {
          formIsValid = false;
          errors["password"] = "*Password should contain at least 8 characters.";
        }
      }

      

     
      this.setState({
        errors: errors
      });
      return formIsValid;


    }
    

    handleRegister(event){
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["phone"] = "";
            fields["code"] = "";
            fields["email"] = "";
            fields["password"] = "";
            fields["confirmpassword"] = "";
            this.setState({fields:fields});
            
             fetch('http://localhost:5000/api/user',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    usr_first_name: event.target.firstname.value,
                    usr_last_name: event.target.lastname.value,
                    usr_phone: "+" + event.target.code.value + " " + event.target.phone.value,
                    usr_email: event.target.email.value,
                    usr_password: event.target.password.value
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

    }

    changeFormLogin(){
            this.setState({
                loginFormActive: true
            })
    }

    changeFormRegister(){
        this.setState({
            loginFormActive: false
        })
    }



    render() {
        let loginFormActive = this.state.loginFormActive;
       
        let successModalClose = () => {
          this.setState({ successModalShow: false });
          window.location.reload();
        }

        let failModalClose = () => this.setState({ failModalShow: false });

        return (
            <div className='main-content-login'>
                <MdDashboard className='logo'/>
               <div className='main-container'>
                    <div className='login-register-form-buttons'>
                        <a className={loginFormActive ? 'login-form-button buttonActive' : 'login-form-button'} onClick={() => this.changeFormLogin()}>Login</a>
                        <a className={loginFormActive ? 'register-form-button' : 'register-form-button buttonActive'} onClick={() => this.changeFormRegister()}>Register</a>
                    </div>
                    <div className='main-form'>


                        <div className={loginFormActive ? 'login-main-form' : 'login-main-form hidden'}>
                            <form className='login-form'>
                                <RiAccountPinCircleFill className='loginIcon'/>
                                <input className='input' type='text' placeholder="Email"></input>
                                <input className='input' type='password' placeholder="Password" />
                                <button className='submit-button' type='submit' onClick={this.props.handler}>Login</button>
                                <a href='/password-recovery' className='forgotPassword'>Forgot your password?</a>
                            </form>
                        </div>


                        <div className={loginFormActive ? 'register-main-form hidden' : 'register-main-form'}>
                        <form className='register-form' onSubmit={this.handleRegister}>
                                <ImUserPlus className='registerIcon'/>
                                <h4 className='register-title'>Create a new account</h4>
                                <div className='name-section'>
                                    <input className='input-short' name="firstname" type='text' placeholder="First Name" value={this.state.fields.firstname} onChange={this.handleChange} onMouseLeave={() => this.validate}required/>
                                    <input className='input-short' name="lastname" type='text' placeholder="Last Name" value={this.state.fields.lastname} onChange={this.handleChange} required/>
                                    <div className="errorMsg">{this.state.errors.name}</div>
                                    
                                </div>
                                
                                <input className='input' name="email" type='text' placeholder="Email" value={this.state.fields.email} onChange={this.handleChange} required />
                                <div className="errorMsg">{this.state.errors.email}</div>
                                
                                <div className='phone-section'>
                                    <h4 className='plus'>+</h4>
                                    <input className='input-code' maxlength="3" name="code" type='text' placeholder="Code" value={this.state.fields.code} onChange={this.handleChange} required/>
                                    <input className='input-phone' name="phone" type='text' placeholder="Phone Number" value={this.state.fields.phone} onChange={this.handleChange} required />
                                </div>
                                <div className="errorMsg">{this.state.errors.phone}</div>
                                
                                <div className='password-section'>
                                    <input className='input' name="password" type='password' placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} required/>
                                    <input className='input' name="confirmpassword" type='password' placeholder="Confirm-Password" value={this.state.fields.confirmpassword} onChange={this.handleChange} required/>
                                    <div className="errorMsg">{this.state.errors.password}</div>
                                </div>
                                <button className='submit-button' type='submit'>Register</button>
                               
                                

        
                            </form>

          {/* <ButtonToolbar className="add-button">
            <Button
              style={{background:'#035bad'}}
              onClick={() => this.setState({ confirmModalShow: true })}
            >
              Show Alert
            </Button>
          </ButtonToolbar> */}

          {/* <ConfirmAlert
            show={this.state.confirmModalShow}
            onHide={confirmModalClose}
            message='are you sure?'
          ></ConfirmAlert> */}

          <SuccessAlert
            show={this.state.successModalShow}
            onHide={successModalClose}
            message='Registered Succesfully!'
          ></SuccessAlert>

          <FailAlert
            show={this.state.failModalShow}
            onHide={failModalClose}
            message='Registration Failed!'
          ></FailAlert>

        
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default LoginRegister
