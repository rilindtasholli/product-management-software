import React, { Component } from 'react';
import { GiPieChart } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import './css/Dashboard.css';


export class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            currentDate: ('0' + new Date().getDate()).slice(-2),
            currentMonth: ('0' + (new Date().getMonth()+1)).slice(-2),
            currentYear: new Date().getFullYear(),

            todaySales: '-',
            thisMonthSales: '-',
            thisYearSales: '-',

            fiveRecentSales: []
        }
    }

    // getCurrentDate(){
    //     currentDate = new Date().getDate()
    //     currentMonth = new Date().getMonth()
    //     currentYear = new Date().getFullYear()

    //     this.setState = {
    //         currentDate: currentDate,
    //         currentMonth: currentMonth,
    //         currentYear: currentYear
    //     }
    // }

    getTodaySalesNumber(){
        fetch('http://localhost:5000/api/data/' + new Date().toISOString().slice(0, 10) )
        .then(response=>response.json())
        .then(res=>{
            this.setState({todaySales: Object.values(res[0])});
        });
    }

    getThisMonthSalesNumber(){
        let currentYear = this.state.currentYear;
        let currentMonth = this.state.currentMonth;
        let date = null;

        function leapYear(year)
        {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }

        switch(currentMonth){
            case '01':
            case '03':
            case '05':
            case '07':
            case '08':
            case '09':
            case '11':
                date = 31
                break;
            case '02':
                leapYear(currentYear) ? date = 29 : date = 28;
            default:
                date = 30;
        }


        fetch('http://localhost:5000/api/data/' + currentYear + '-' + currentMonth + '-01/' + currentYear + '-' + currentMonth + '-' + date)
        .then(response=>response.json())
        .then(res=>{
            this.setState({thisMonthSales: Object.values(res[0])});
        });
    }

    getThisYearSalesNumber(){
        let currentYear = this.state.currentYear;
        fetch('http://localhost:5000/api/data/' + currentYear + '-01-01/' + currentYear + '-12-29')
        .then(response=>response.json())
        .then(res=>{
            this.setState({thisYearSales: Object.values(res[0])});
        });
    }

    getFiveRecentSales(){
        fetch('http://localhost:5000/api/data/recentsales')
        .then(response=>response.json())
        .then(res=>{
            this.setState({fiveRecentSales: res});
        });
    }

    componentDidMount(){
        this.getTodaySalesNumber();
        this.getThisMonthSalesNumber();
        this.getThisYearSalesNumber();
        this.getFiveRecentSales();
    }

    // componentDidUpdate(){
    //     this.getTodaySalesNumber();
    //     this.getThisMonthSalesNumber();
    //     this.getThisYearSalesNumber();
    // }
    
    render() {
        const{fiveRecentSales, salid, cliname, cliphone, saldate, totalprice}=this.state;

        return (
           
            <div className='main-content-dashboard'>
                <div className='main-div'>
                    <div className='sales-activity'>
                        <h1 className='activity-container-title' >Sales Activity</h1>
                        <div className='sales-items'>
                            <div className='sales-item'>
                                <h1 className='item-data'>{this.state.todaySales}</h1>
                                <h3 className='item-title'>Today</h3>
                            </div>
                            <div className='sales-item'>
                                <h1 className='item-data'>{this.state.thisMonthSales}</h1>
                                <h3 className='item-title'>This Month</h3>
                            </div>
                            <div className='sales-item'>
                            <h1 className='item-data'>{this.state.thisYearSales}</h1>
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
                                {fiveRecentSales.map(sale=>
                                <tr key={sale.sal_id}>
                                    <td>{sale.sal_id}</td>
                                    <td>{sale.cli_name}</td>
                                    <td>{sale.cli_phone}</td>
                                    <td>{sale.sal_date}</td>
                                    <td>${sale.total_price}</td>
                                </tr>)}
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
