import React, { Component } from 'react';
import { GiPieChart } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import './css/Dashboard.css';



export class Dashboard extends Component {
    
    render() {

        return (
            
            <div className='main-content-dashboard'>
                <div className='main-div'>
                    <div className='sales-activity'>
                        <h1 className='activity-container-title' >Sales Activity</h1>
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
                    
                    <div className='charts-section'>
                        <div>
                        <h1 className='charts-container-title' >Sales by Month</h1>
                        <div className='category-sales-chart'>
                            <LineChart/>
                        </div>
                        </div>
                        
                        
                        <div>
                        <h1 className='charts-container-title' >Sales by Category</h1>
                        <div className='category-sales-chart'>
                            <PieChart/>
                        </div>
                        </div>

                        
                    </div>
                    <a onClick={() => this.props.history.push('/reports')} className='show-more-button'>Show More <GiPieChart/></a>
                    
                    <div className='recent-sales-section'>
                    <h1 className='recent-sales-container-title' >Recent Sales</h1>
                        <div className='recent-sales-table'>
                            <Table className=" m-auto  font-weight-bold" striped  >
                                <thead
                                    style={{
                                    background: "rgb(32, 72, 110)",
                                    color: "white",
                                    }}
                                >
                                    <tr>
                                    <th>Sale ID</th>
                                    <th>Client Name</th>
                                    <th>Phone Number</th>
                                    <th>Date</th>
                                    <th>Total Price</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                    <td>68</td>
                                    <td>Filan Fisteki</td>
                                    <td>044-000-000</td>
                                    <td>04-05-2021</td>
                                    <td>$53.39</td>
                                    </tr>

                                    <tr>
                                    <td>67</td>
                                    <td>Nuredin Nuredini</td>
                                    <td>044-100-100</td>
                                    <td>01-05-2021</td>
                                    <td>$102.00</td>
                                    </tr>

                                    <tr>
                                    <td>66</td>
                                    <td>Filane Fisteki</td>
                                    <td>044-200-200</td>
                                    <td>28-04-2021</td>
                                    <td>$88.55</td>
                                    </tr>

                                    <tr>
                                    <td>65</td>
                                    <td>Ramadan Ramadani</td>
                                    <td>044-300-300</td>
                                    <td>21-04-2021</td>
                                    <td>$32.59</td>
                                    </tr>
                                    

                                </tbody>
                            </Table>
                            
                        </div>    
                        <a onClick={() => this.props.history.push('/sales')} className='show-more-button'>Show More <FaChartLine/></a>
                    </div>


                </div>
                {/* <div className='account-data'>
                    
                </div> */}
                
              
                    
                    
            </div> 
        )
    }
}

export default Dashboard
