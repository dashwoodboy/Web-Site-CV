import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider } from '../components/Divider';
import { subjectName } from '../data/personal';
import { NavContactButton } from './NavContactButton';
import { NavOptions } from './NavOptions';

export function NavBar() {

    const navigate = useNavigate()

    return (
        <div className='nav_bar'>
            <div className='nav_elem'>
                <h1 className='logo' onClick={() => navigate("/")}>{subjectName}</h1>
            </div>
            <div className='nav_elem'>
                <NavOptions/>
            </div>
            <div className='nav_elem'>
                <NavContactButton/>
            </div>
        </div>
    )
}