import React from 'react'
import { navBarOptions } from '../data/structure'
import { NavSingleOption } from './NavSingleOption'

export function NavOptions() {
    
    return(
        <div className='nav_option_container'>
            {navBarOptions.map(option => <NavSingleOption key={option} optionName={option} />)}
        </div>
    )
}