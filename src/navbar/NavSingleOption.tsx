import React from 'react'

export function NavSingleOption({optionName} : {optionName: String}) {
    return(
        <p className='single_option'>{optionName}</p>
    )
}