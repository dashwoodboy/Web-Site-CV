import React from "react";
import { Qualification } from "../data/personal";

function grade(grade: string) {
    if (grade == null)
        return
    else
        return (
            <p>{grade}</p>
        )
}

export function SingleQualification({qualification} : {qualification: Qualification}) {

    

    return(
        <div className="qual_container">
            <div className="qual_entry">
                <h1>{qualification.title}</h1>
                <p>{qualification.description}</p>
            </div>
            <div className="qual_entry">
                <p>{qualification.place} </p>
                {grade(qualification.grade)}
            </div>
            <div className="qual_entry">
                <p>{qualification.startDate} - {qualification.endDate}</p>
            </div>
        </div>
    )
}