import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue',margin:'20px'}}>
            <h2>This is Dail {props.name}</h2>
            <h2>steps so far {props.steps}</h2>
        </div>
    );
};

export default Dial;