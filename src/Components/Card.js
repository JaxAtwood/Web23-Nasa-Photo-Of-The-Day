import React from "react";
import { ImageStyling } from "./Styles";

const Card = props => {
    return (
    <div className="navBar" key={props.id}> 
        <ImageStyling className="nasa-img" alt="dailyphoto" src={props.url}/>
        <h4> Today's Image is Called:</h4>
        <h2>{props.title}</h2>
        <h3>Taken by: {props.copyright}</h3>
        <hr></hr>
        <h3>{props.explanation}</h3>
    </div>
    );
};

export default Card;