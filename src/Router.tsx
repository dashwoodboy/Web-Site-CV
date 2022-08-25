import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import { Contacts } from "./screens/Contacts";
import { Hobbies } from "./screens/Hobbies";
import { HomePage } from "./screens/HomePage";
import { Qualifications } from "./screens/Qualifications";

export function Router() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
            
                <Route path='' element={<HomePage/>}/>
                <Route path='hobbies' element={<Hobbies/>}/>
                <Route path='qualifications' element={<Qualifications/>}/>
                <Route path='contact' element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    )
}