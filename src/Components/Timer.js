import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";

const Timer = (props) => {
        
                
                if (props.pause === false) {
                    useEffect(()=>{
                        let myInterval = setTimeout(() => {
                                if (props.seconds > 0) {
                                    props.setSeconds(props.seconds - 1);
                                }
                                if (props.seconds === 0) {
                                    if (props.minutes === 0) {
                                        clearTimeout(myInterval)
                                    } else {
                                        props.setMinutes(props.minutes - 1);
                                        props.setSeconds(59);
                                    }
                                } 
                            }, 1000)
                            return ()=> {
                                clearTimeout(myInterval);
                              };
                        });
                } 
                
    
            
            


        

    
    
    
        return (
            <div className="timer">
                <p id="timer-label">TIMER</p>
                
                <h1> {props.minutes}:{props.seconds < 10 ?  `0${props.seconds}` : props.seconds}</h1> 
        
            </div>
        );
        
    
};

export default Timer;



