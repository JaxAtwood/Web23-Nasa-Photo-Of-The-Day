// import React from "react";
import styled from "styled-components";

const Button = styled.body`
background: linear-gradient(to bottom, hotpink, #5DC6EB);
padding: 30px;
display: flex; //display flex got rid of the white space at the top
min-height: 100vh; //height with a 100view height got rid of the bottom white space
flex-direction: column;

@media (max-width: 600px) {
    background: linear-gradient(to top, hotpink, #5DC6EB);
`

const Navvy = styled.div`
border: 5px solid black;
width: 60%;
margin: 0 auto;
background: repeating-radial-gradient(hotpink, magenta, teal);
`

const Box = styled.div`
background: turquoise;
width: 70%;
margin: 0 auto;
padding: 10px;
border: 20px solid magenta;
`
const ImageStyling = styled.img`
width: 80%;
padding: 20px;
`

export { Button, Box, ImageStyling, Navvy };
