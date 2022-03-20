import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps,setSteps] =useState(0)
    const Increase = () => {
        setSteps(steps + 1)
    }

    useEffect(()=> {
        console.log(steps)
    },[steps])
    return (
        <div style={{border:'2px solid purple', margin:'20px'}}>
             <h1>This my smart watch</h1>
             <h2 >My Current Steps {steps}</h2>
             <button onClick={Increase} style={{fontSize:'20px',padding:"5px"}}>De Dour ..........</button>
             <Display name='Garmin' steps={steps}></Display>
        </div>
    );
};

export default Watch;