import React from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillDashboard } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { AiFillAppstore } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import { FaLuggageCart } from 'react-icons/fa';
import { GiPieChart } from 'react-icons/gi';
import { RiSettings4Fill } from 'react-icons/ri';
import { RiAccountCircleFill } from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiFillDashboard className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FiPackage className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Categories',
        path: '/categories',
        icon: <AiFillAppstore className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Sales',
        path: '/sales',
        icon: <FaChartLine className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Suppliers',
        path: '/suppliers',
        icon: <FaWarehouse className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icon: <FaLuggageCart className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Data & Reports',
        path: '/reports',
        icon: <GiPieChart className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <RiSettings4Fill className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <RiAccountCircleFill className='nav-link-icon'/>,
        cName: 'nav-text'
    },
]