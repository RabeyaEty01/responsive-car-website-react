import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, description, img } = props.service;


    return (
        <div className="service">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h5>Price: {price}</h5>
            <p>{description}</p>

        </div>
    );
};

export default Service;