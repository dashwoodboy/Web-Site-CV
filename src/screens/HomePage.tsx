import React, { useRef, useState } from "react"
import { ProfileImage } from "../components/ProfileImage"
import { TitleEng } from "../components/TitleEng"
import { FindMore } from "./FindMode"
import { CSSTransition, SwitchTransition } from "react-transition-group";

export function HomePage() {

    const [show, setShow] = useState(false)
    const nodeRef = useRef<any>(null);

    function changeState() {
        setShow(it => !it)
    }

    return(
        <div className='screen_area_container'>
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={show? 'findMore' : 'TitleEng'}
                    nodeRef={nodeRef}
                    addEndListener={(done: () => void) => {
                        nodeRef.current?.addEventListener("transitionend", done, false);
                      }}
                    classNames='find'>
                    
                    <div ref={nodeRef}>
                        {show ? <FindMore changeState={changeState}/>: <TitleEng changeState={changeState}/>}
                    </div>
                    
                </CSSTransition>
            </SwitchTransition>
            <ProfileImage/>
        </div>
    )
}