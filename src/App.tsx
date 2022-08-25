import * as React from 'react'
import { Router } from './Router'
import { NavBar } from './navbar/NavBar'
import { Contacts } from './screens/Contacts'
import { FindMore } from './screens/FindMode'
import { Hobbies } from './screens/Hobbies'
import { HomePage } from './screens/HomePage'
import { Qualifications } from './screens/Qualifications'



export function App() {
    return (
        <>
            
            <Router/>
        </>
    )
}