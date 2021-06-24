import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import LoginRegister from './pages/LoginRegister';
import Clients from './pages/Clients';
import Employee from './pages/Employee';
import Suppliers from './pages/Suppliers';


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginActive: localStorage.loginActive
    };

    
  }


  render() {
    
    if(this.state.loginActive == "true"){
      return (
     
     
   <div>
       <Router>
          <Navbar className='navbar'/>

          <Redirect from="/" to="/dashboard"/>
          
          <Switch>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/products' component={Products}/>
            <Route path='/clients' component={Clients}/>
            <Route path='/categories' />
            <Route path='/clients' component={Clients}/>
            <Route path='/login' component={LoginRegister}/>
            <Route path='/employee' component={Employee}/>
            <Route path='/suppliers'component={Suppliers}/>
          </Switch>
          
       </Router>
        
       <footer>
        © Management Software, 2021 All rights reserved
        </footer>
        
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
