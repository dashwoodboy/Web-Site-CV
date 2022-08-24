import * as React from 'react'
import { NavBar } from './navbar/NavBar'
import { Contacts } from './screens/Contacts'
import { Hobbies } from './screens/Hobbies'
import { HomePage } from './screens/HomePage'



export function App() {
    return (
        <>
            <NavBar/>
            <Hobbies/>
        </>
    )
}