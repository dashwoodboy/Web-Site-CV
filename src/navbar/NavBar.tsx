import React from 'react';
import { Divider } from '../components/Divider';
import { subjectName } from '../data/personal';
import { NavContactButton } from './NavContactButton';
import { NavOptions } from './NavOptions';

export function NavBar() {
    return (
        <div className='nav_bar'>
            <h1 className='logo'>{subjectName}</h1>
            <NavOptions/>
            <NavContactButton/>
            <Divider/>
        </div>
    )
}