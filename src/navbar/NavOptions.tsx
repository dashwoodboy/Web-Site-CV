import React from 'react'
import { navBarOptions } from '../data/structure'
import { NavSingleOption } from './NavSingleOption'

export function NavOptions() {
    
    return(
        <>
            {navBarOptions.map(option => <NavSingleOption key={option.name} option={option} />)}
        </>
    )
}