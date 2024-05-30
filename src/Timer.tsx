import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props:any) => {
//    const {initialMinute = 0,initialSeconds = 0} = props;
    let initialSeconds = 60; 
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [type, setType] = useState(1);
        const typearray = ['play','pause'];
    let myInterval:NodeJS.Timer;
    useEffect(()=>{
         myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
         }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    const playpause = () => {
        if(type===1)
            {
                clearInterval(myInterval);
                setType(0);
            }
        else
        {
            myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
             }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
            setType(1);
        }
        }
    
    const reset = () => {
        setSeconds(60); 
    }
    return (
        <div className='flex flex-col justify-center'>
        { 
         seconds === 0
            ? null
            : <h5> {seconds < 10 ?  `0${seconds}` : seconds}</h5> 
        }
        
       <button className='w-20 h-10 rounded-lg border-black border-2 text-black font-semibold' onClick={playpause}>{typearray[type]}</button>
       <button className='w-20 h-10 rounded-lg border-black border-2 text-black font-semibold' onClick={reset}>Reset</button>
        </div>
    )
}

export default Timer;