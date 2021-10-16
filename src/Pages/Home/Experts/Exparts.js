import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts =[
    {
        img: mechanic1,
        name:'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name:'John Anderson',
        expertize: '-Tire Expert-'
    },
    {
        img: mechanic3,
        name:'David Smith',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic4,
        name:'Seo Joon',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic5,
        name:'Lee Jong Sook',
        expertize: '-Alrounder Expert-'
    },
]






const Exparts = () => {
    return (
        <div className="container" id="experts">
            <h2 className="p-3 text-primary">Our Experts</h2>
            <div className="row">
               {
                   experts.map(expert=><Expert
                   key={expert.name}
                   expert={expert}
                   ></Expert>)
               }
            </div>
        </div>
    );
};

export default Exparts;