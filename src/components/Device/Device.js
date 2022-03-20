import React from 'react';
import Details from '../Details/Details';

const Device = (props) => {
    return (
        <div>
             <h1> I have : {props.name} </h1>
             <Details price = {props.price}></Details>
        </div>
    );
};

export default Device;