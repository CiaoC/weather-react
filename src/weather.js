import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} degrees `);
    }
    let apiKey = "9c48a62dcc12a129cf6c63c31fa92ac6";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

    axios.get(apiURL).then(handleResponse);
return (
        <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
        />
        
);
}
