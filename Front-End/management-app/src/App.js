import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import LoginRegister from './pages/LoginRegister';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginActive: false
    };

    this.handler = this.loginHandler.bind(this)
  }

  loginHandler() {
      this.setState({
        loginActive: true
      })
  }

  render() {
    if(this.state.loginActive == true){
      return (
     
        <div>
          
       <Router>
          <Navbar className='navbar'/>

          <Redirect from="/" to="/dashboard" />

          <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/products' component={Products}/>
            <Route path='/categories' />
            <Route path='/login' component={LoginRegister}/>
          </Switch>
       </Router>
       
      </div>
      )
    }else{
      return (
     
        <div>
           <LoginRegister handler={this.handler}/>
      </div>
      )
     
    }
    
  }
}

export default App
