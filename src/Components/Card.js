import React from "react";
import { ImageStyling } from "./Styles";

const Card = props => {
    return (
    <div className="navBar" key={props.id}> 
        <ImageStyling className="nasa-img" alt="dailyphoto" src={props.url}/>
        <h4> Today's Image is Called:</h4>
        <h3>{props.title}</h3>
        <h4>Description:</h4>
        <h5>{props.explanation}</h5>
    </div>
    );
};

export default Card;