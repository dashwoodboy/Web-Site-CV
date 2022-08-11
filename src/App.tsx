import * as React from 'react'
import { NavBar } from './navbar/NavBar'
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