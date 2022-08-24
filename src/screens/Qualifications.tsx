import React from "react"
import { SingleQualification } from "../components/SingleQualification"
import { qualifications, volunteering } from "../data/personal"

export function Qualifications() {

    return(
        <div className="screen_area_container">
            <div className="column">
                <h1 className="page_title">Qualifications</h1>
                <h2 className="sub_title">Education</h2>
                {qualifications.map(it => <SingleQualification key={it.title} qualification={it}/>)}
                <h2 className="sub_title">Volunteering</h2>
                {volunteering.map(it => <SingleQualification key={it.title} qualification={it}/>)}
                
            </div>
        </div>
    )
}