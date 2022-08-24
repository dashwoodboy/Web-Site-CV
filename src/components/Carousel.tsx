import React, { useEffect, useState } from "react";
import { Hobby } from "../data/personal";

export function CarouselElement({hobby} : {hobby: Hobby}) {
    console.log(hobby.hobbyName)
    return(
        <div>
            <div className="carousel_left">
                <img src={hobby.imageLocation} className="hobby_image"/>
            </div>
            <div className="carousel_right">
                <h2 className="carousel_title">{hobby.hobbyName}</h2>
                <p className="carousel_text">{hobby.hobbyDetails}</p>
            </div>
        </div>
    )
}

export function Carousel({hobbies} : {hobbies: Hobby[]}) {
    
    const [index, setIndex] = useState(0)
    const [btn, setBtn] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setIndex(curr => {
                if(curr < hobbies.length - 1)
                    return ++curr
                else
                    return 0
            })
        }, 5000)

        return () => clearInterval(intervalId)
    },[btn])

    function click(plus: boolean) {
        setIndex(it => {
            setBtn(bt => !bt)

            const val = plus? it + 1 : it - 1

            return val >= hobbies.length? 0 : val
        })
    }

    return(
        <div className="carousel_container">
            <button className="back_button_carousel" onClick={() => click(false)}>{'<'}</button>
            <CarouselElement hobby={hobbies[index]}/>
            <button className="next_button_carousel" onClick={() => click(true)}>{'>'}</button>
        </div>
    )
}