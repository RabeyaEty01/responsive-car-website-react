import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Experts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;