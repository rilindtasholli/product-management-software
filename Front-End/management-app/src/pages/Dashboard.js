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
                <div className="recent-sales-container">

                <div className="recent-sales">

                   <div className="recent-sales-details">
                       
                       <ul className="details">
                       <p className="recent-title">Recent Sales</p>
                       <li class="topic">Date</li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                        <li><a href="#">02 Jan 2021</a></li>
                       </ul>

                   </div>

                   <div className="recent-sales-details">
                       
                   <ul class="details">
                    <li class="topic">Customer</li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                    <li><a href="#">Filan Fisteki</a></li>
                </ul>

                   </div>

                   
                   <div className="recent-sales-details">
                       
                   <ul class="details">
                    <li class="topic">Sales</li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Returned</a></li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Returned</a></li>
                    <li><a href="#">Delivered</a></li>
                    <li><a href="#">Pending</a></li>
                    <li><a href="#">Delivered</a></li>
                </ul>
                

                   </div>

                   <div className="recent-sales-details">
                       
                        <ul class="details">
                            <li class="topic">Total</li>
                            <li><a href="#">$204.98</a></li>
                            <li><a href="#">$24.55</a></li>
                            <li><a href="#">$25.88</a></li>
                            <li><a href="#">$170.66</a></li>
                            <li><a href="#">$56.56</a></li>
                            <li><a href="#">$44.95</a></li>
                            <li><a href="#">$67.33</a></li>
                            <li><a href="#">$23.53</a></li>
                            <li><a href="#">$46.52</a></li>
                        </ul>
                            
    
                       </div>

            
                </div>
                
                <div className="top-selling-products">

                    <ul className="top-sales-details">
                        <p className="top-products-title">Top Selling Products</p>
                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 1</span>
                            </a>
                            <span className="price">$1107</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 2</span>
                            </a>
                            <span className="price">$107</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 3</span>
                            </a>
                            <span className="price">$243</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 4</span>
                            </a>
                            <span className="price">$453</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 5</span>
                            </a>
                            <span className="price">$24</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 6</span>
                            </a>
                            <span className="price">$545</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 7</span>
                            </a>
                            <span className="price">$66</span>
                        </li>

                        <li>
                            <a>
                            <img className="images" src="" alt=""/>
                                    <span className="product"> Produkti 8</span>
                            </a>
                            <span className="price">$124</span>
                        </li> 

                    </ul>

                    


                    </div>
                        


                    </div>

                    

              
            </div> 
        )
    }
}

export default Dashboard
