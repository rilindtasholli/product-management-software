import React from 'react'
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiFillDashboard } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { AiFillAppstore } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs'
import {FaPersonBooth} from 'react-icons/fa'

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
        title: 'Employees',
        path: '/employees',
        icon: <BsFillPersonFill className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Clients',
        path: '/clients',
        icon: <FaPersonBooth className='nav-link-icon'/>,
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
        icon: <AiFillAppstore className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Data & Reports',
        path: '/reports',
        icon: <AiFillAppstore className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiFillAppstore className='nav-link-icon'/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <AiFillAppstore className='nav-link-icon'/>,
        cName: 'nav-text'
    },
]