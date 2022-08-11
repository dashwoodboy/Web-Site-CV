import React from "react"
import { FindMoreButton } from "../components/FindMoreButton"
import { ProfileImage } from "../components/ProfileImage"

export function HomePage() {

    return(
        <div className='screen_area_container'>
            <div className='left_side_homepage_container'>
                <h1 className='title_text'>Software Engineer</h1>
                <FindMoreButton/>
            </div>
            <ProfileImage/>
        </div>
    )
}