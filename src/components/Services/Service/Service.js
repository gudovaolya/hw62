import React from 'react';
import './Service.css';

const Service = (props) => {
    return (
        <div className="service">
            <h4 className={props.category}><i></i><span>{props.title}</span></h4>
            <p>{props.text}</p>
        </div>
    )
};

export default Service;