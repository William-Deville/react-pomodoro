import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

const Timer = (props) => {
        const {initialMinute = 1,initialSeconds = 0} = props;
        
        useEffect(()=>{
        let myInterval = setInterval(() => {
                if (props.seconds > 0) {
                    props.setSeconds(props.seconds - 1);
                }
                if (props.seconds === 0) {
                    if (props.minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        props.setMinutes(props.minutes - 1);
                        props.setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });
    

    
    
    
        return (
            <div className="timer">
                <p id="timer-label">TIMER</p>
                
                <h1> {props.minutes}:{props.seconds < 10 ?  `0${props.seconds}` : props.seconds}</h1> 
        
            </div>
        );
        
    
};

export default Timer;



