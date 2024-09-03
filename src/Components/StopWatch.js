import React from 'react';
import { useTimer } from 'react-timer-hook';
import TimerStyled from './TimerStyled';

function MyStopwatch() {
    // function getDiffinSec(dt1, dt2) {
    //     const diffMs = dt2 - dt1;
    //     const diffSec = Math.abs(diffMs / 1000);
    //     return diffSec;
    //   }


    const endDate = new Date('10/19/2024');

    const stopwatchOffset = new Date() 
    
    // stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + getDiffinSec(new Date(), startDate));
    
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