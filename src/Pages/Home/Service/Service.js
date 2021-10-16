import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, name, price, description, img } = props.service;


    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h5>Price: {price}</h5>
            <p className="px-5">{description}</p>
            <br />
           <Link to={`/booking/${id}`}> <button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>

        </div>
    );
};

export default Service;