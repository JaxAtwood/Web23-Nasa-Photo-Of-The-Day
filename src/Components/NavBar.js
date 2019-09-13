import React from "react";
import { Navvy } from "./Styles";

const NavBar = props => {
    return (
    
    <div className="TITLE" key={props.id}> 
    <Navvy>
        <h1>NASA ASTONOMY PICTURE OF THE DAY</h1>
        <h2>Today's Date: {props.date}</h2>
    </Navvy>
    </div>
    
    );
};

export default NavBar;