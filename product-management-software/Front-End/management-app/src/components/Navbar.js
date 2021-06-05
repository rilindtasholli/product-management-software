import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RiSettings4Fill } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>

            <div className="navbar-header">
                <NavLink to="#" className='menu-bars'>
                    <FaBars onClick={showSideBar}/>
                </NavLink>
                <div className='title m-auto'>
                    <MdDashboard className='logo'/>
                    <h2>Product Management Software</h2>
                </div>
                <NavLink to="#" className='notifications'>
                    <FaBell  onClick={showSideBar} size='35px'/>
                </NavLink>
            </div>
            <nav id='navmenu' className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items '>
                    <li className='navbar-toggle'>
                        <NavLink to="#" className='menu-close'>
                            <AiOutlineCloseCircle onClick={showSideBar}/>
                        </NavLink>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path} activeClassName="link-active">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                
                <a className='logout-button' href='/'>Logout <FiLogOut size='15px'/></a>
            </nav>
        </>
    )
}

export default Navbar

