import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Clients from './pages/Clients';


function App() {
  let active = 'dashboard';
  return (
    <div>
     <Router>
       
     
        <Navbar className='navbar'>
        
        </Navbar>
        
        <Switch>
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/products' component={Products}/>
          <Route path='/categories' />
          <Route path='/clients' component={Clients}/>
        </Switch>
     </Router>

     
     
    </div>
    
    
  );
}

export default App;
