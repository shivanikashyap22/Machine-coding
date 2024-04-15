import axios from "axios";
import React from "react";
import { useState } from "react";
const WeatherApp=()=>{
    const API_KEY = '3c4166e6b7dc9f16372a56e7a0011e15';
    const [city, setCity]=useState('')
    const [weather, setWeather]=useState()
    const handleClick = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
           console.log(response, "response")
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
      }
    }
    return <>
    <div>Weather App</div>
    <input type="text" value={city} placeholder="Enter City Name" onChange={(e)=>setCity(e.target.value)}/>
    <button onClick={handleClick}>Search</button>

    {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp} Kelvin</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            )}
    
    </>
}
export default WeatherApp;