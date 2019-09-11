import React from "react";

const Card = props => {
    return (
    <div className="navBar" key={props.id}> 
        <img className="nasa-img" alt="dailyphoto" src={props.url}/>
        <h2>DATE: {props.date}</h2>
        <p>Description: {props.explanation}</p>
    </div>
    );
};

export default Card;