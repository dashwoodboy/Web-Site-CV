import React from "react";
import { hobbies } from "../data/personal";

export function Hobbies() {
    return (
        <div className="screen_area_container">
            <div className="column">
                <h1 className="page_title">Hobbies</h1>
                {hobbies.map(elem => <p>{elem.hobbyName}</p>)}
            </div>
        </div>
    )
}