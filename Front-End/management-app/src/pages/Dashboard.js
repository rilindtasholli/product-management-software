import React, { Component } from 'react';
import './css/Dashboard.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export class Dashboard extends Component {
    render() {
        return (
            <div className='main-content'>
                <div>
                    <div className='sales-activity'>
                        <h1 className='container-title' >Sales Activity</h1>
                        <div className='sales-items'>
                            <div className='sales-item'>
                                <h1 className='item-data'>15</h1>
                                <h3 className='item-title'>Today</h3>
                            </div>
                            <div className='sales-item'>
                                <h1 className='item-data'>152</h1>
                                <h3 className='item-title'>This Month</h3>
                            </div>
                            <div className='sales-item'>
                            <h1 className='item-data'>1860</h1>
                                <h3 className='item-title'>This Year</h3>
                            </div>
                        </div>
                    </div>    
                </div>
                {/* <div className='account-data'>
                    
                </div> */}


                
            </div>
        )
    }
}

export default Dashboard
