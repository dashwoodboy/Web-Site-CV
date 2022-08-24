import React from "react";

export function TitleEng({changeState}: {changeState: Function}) {
    return(
        <div className='left_side_homepage_container'>
                <h1 className='title_text'>Software Engineer</h1>
                <button className='find_more_button' onClick={() => changeState()}>Find More</button>
        </div>
    )
}