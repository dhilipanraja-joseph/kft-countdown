import React from 'react';
import { useTimer } from 'react-timer-hook';
import TimerStyled from './TimerStyled';

function MyStopwatch() {

    const endDate = new Date('09/30/2024');

    const stopwatchOffset = new Date() 
        
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({expiryTimestamp: endDate});


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '80px' }}>
            <TimerStyled seconds={seconds} minutes={minutes} hours={hours} days={days}/>
            </div>

        </div>
    );
}

export default MyStopwatch
