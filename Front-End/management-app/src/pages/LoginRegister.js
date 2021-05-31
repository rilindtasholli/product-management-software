import React, { Component } from 'react';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import {ImUserPlus} from 'react-icons/im';
import { MdDashboard } from 'react-icons/md';
import './css/LoginRegister.css';

export class LoginRegister extends Component {

    constructor() {
        super();
        this.state = {
            loginFormActive: true
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

    // handleLoginClick(){
    //     this.props.handler
    // }

    render() {
        let loginFormActive = this.state.loginFormActive ? true : false;

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
                        <form className='register-form'>
                                <ImUserPlus className='registerIcon'/>
                                <h4 className='register-title'>Create a new account</h4>
                                <div className='name-section'>
                                    <input className='input-short' type='text' placeholder="First Name" />
                                    <input className='input-short' type='text' placeholder="Last Name" />
                                </div>
                                
                                <input className='input' type='text' placeholder="Email" />
                                
                                <div className='phone-section'>
                                    <h4 className='plus'>+</h4>
                                    <input className='input-code' type='text' placeholder="Code" />
                                    <input className='input-phone' type='text' placeholder="Phone Number" />
                                </div>
                                
                                <div className='password-section'>
                                    <input className='input' type='password' placeholder="Password" />
                                    <input className='input' type='password' placeholder="Confirm-Password" />
                                </div>
                                <button className='submit-button' type='submit' >Register</button>
                            </form>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default LoginRegister
