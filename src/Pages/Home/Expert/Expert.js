import React from 'react';

const Expert = (props) => {
    const {name, img, expertize}=props.expert;
    return (
        <div className="pt-3 col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expert;