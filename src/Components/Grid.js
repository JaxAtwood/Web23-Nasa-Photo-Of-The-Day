import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";

const Grid = () => {
    const [nasaInfo, setNasaInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
            const nasa = res.data;
            console.log(nasa);
            setNasaInfo(nasa);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
        <NavBar />
        <Card 
            key={nasaInfo.id}
            id={nasaInfo.id}
            url={nasaInfo.url}
            date={nasaInfo.date}
            explanation={nasaInfo.explanation}
            />
        
        </div>
    )
}

export default Grid;