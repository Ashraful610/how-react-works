import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'2px solid crimson' , margin:'20px'}}>
            <h1>name : {props.name}</h1>
             <h2> This is steps : {props.steps} </h2>
             <Dial name="Smart Watch" steps={props.steps}></Dial>
        </div>
    );
};

export default Display;