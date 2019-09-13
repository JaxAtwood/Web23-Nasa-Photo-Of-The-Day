import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";
import { Box } from "./Styles";


const Grid = () => {
    const [nasaInfo, setNasaInfo] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=LNNCIJIz8LC1fgpl0iG9KWVzQjTHqyT1WTZSbfN3`)
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
            <Box>
                <NavBar 
                    date={nasaInfo.date}
                />
                <Card 
                    key={nasaInfo.id}
                    id={nasaInfo.id}
                    url={nasaInfo.url}
                    title={nasaInfo.title}
                    copyright={nasaInfo.copyright}
                    explanation={nasaInfo.explanation}
                />
            </Box>
        </div>
        
    )
}

export default Grid;