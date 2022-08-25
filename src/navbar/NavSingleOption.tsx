import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavOption } from '../data/structure'

export function NavSingleOption({option} : {option: NavOption}) {
    const navigate = useNavigate()

    function navigation() {

        if(option.inside)
            navigate(option.route)
        else
            window.location.href = 'https://github.com/dashwoodboy?tab=repositories'
          
    }

    return(
        <p className='single_option' onClick={() => navigation()}>{option.name}</p>
    )
}