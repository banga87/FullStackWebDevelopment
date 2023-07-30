import axios from 'axios';
import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

const WeatherData = ({ country }) => {

    const lat = country.capitalInfo.latlng[0];
    const lng = country.capitalInfo.latlng[1];
    const capital = country.capital[0]
        
    const [ weather, setWeather ] = useState(null);

    useEffect(() => {
        weatherService.getWeather(lat, lng)
            .then(data => {
                setWeather(data)
                console.log(data)
            })
    }, [country]);


    return (
        <div>
            <h2>Weather in {capital}</h2>
            {weather ? 
            <>
                <p>temperature {weather.main.temp} Celcius</p>
                <p>wind {weather.wind.speed}m/s</p>
            </> :
            <p>Loading weather data...</p>
            }
        </div>
    )
}

export default WeatherData;