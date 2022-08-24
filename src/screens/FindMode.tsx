import React from "react";
import { aboutMe } from "../data/personal";

export function FindMore({changeState}: {changeState: Function}) {

    return(
        <div className='left_side_homepage_container'>
            <p className="about_me">{aboutMe}</p>
            <button className="back_button" onClick={() => changeState()}>{'<'}</button>
        </div>
    )
}