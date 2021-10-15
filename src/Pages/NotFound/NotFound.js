import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimg from '../../images/404.jpg';


const NotFound = () => {
    return (
        <div>
            <img src={notfoundimg} alt="" />
            <p>OOPS! Look Like The Page You Are Looking For It's Not Found.</p>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;