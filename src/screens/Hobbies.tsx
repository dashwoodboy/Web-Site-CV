import React from "react";
import { Carousel } from "../components/carousel";
import { hobbies } from "../data/personal";

export function Hobbies() {
    return (
        <div className="screen_area_container">
            <div className="column">
                <h1 className="page_title">Hobbies</h1>
                <Carousel hobbies={hobbies}/>
            </div>
        </div>
    )
}