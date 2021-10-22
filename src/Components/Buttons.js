import React, {useState} from 'react'
import Timer from './Timer'



const Buttons = (props) => {

    const decrementTimerLenghtByOneMinute = () => {
        const newTimerLengthInSeconds = props.minutes - 1;
        if (newTimerLengthInSeconds < 0) {
            props.setSeconds(0);
        } else {
            props.setMinutes(newTimerLengthInSeconds);
        }
    };


    const incrementTimerLengthByOneMinute = () => props.setMinutes(props.minutes + 1);

    const refreshTimer = () => {
        props.setMinutes(0);
        props.setSeconds(0);
    }

    const startPause = () => {
        if (props.pause === true) {
            props.setPause(false)
        } else {
            props.setPause(true);
        }
        console.log(props.pause)
    }
        return (
            <div className="buttons">
                <button id="timer-increment" onClick={incrementTimerLengthByOneMinute}> + </button>
                <button id="timer-decrement" onClick={decrementTimerLenghtByOneMinute}> - </button>
                <button id="timer-refresh" onClick={refreshTimer}> Refresh </button>
                <button id="timer-startpause" onClick={startPause}> Start / Pause </button>
            </div>
        )
    }

    export default Buttons;