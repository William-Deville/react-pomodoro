import React, {useState} from "react"
import Buttons from './Buttons'
import Timer from './Timer'




const App = () => {

    const [timerLengthInSeconds, setTimerLengthInSeconds] = useState(0);
    
    const [minutes, setMinutes ] = useState(1);
    const [seconds, setSeconds ] =  useState(0);

        return (
            <div className="App">
                <h1>POMODORO</h1>
                <p>Focus</p>
                <Timer timerLengthInSeconds = {timerLengthInSeconds} minutes = {minutes} setMinutes = {setMinutes} seconds = {seconds} setSeconds = {setSeconds}  />
                <Buttons minutes = {minutes} setMinutes = {setMinutes} seconds = {seconds} setSeconds = {setSeconds}   />
            </div>
        );
    }

export default App;