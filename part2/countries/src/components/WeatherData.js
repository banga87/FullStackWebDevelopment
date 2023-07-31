import axios from 'axios';
import { useState, useEffect } from 'react';
import weatherService from '../services/weatherService';

const WeatherData = ({ country }) => {

    const lat = country.capitalInfo.latlng[0];
    const lng = country.capitalInfo.latlng[1];
    const capital = country.capital[0]
        
    const [ weather, setWeather ] = useState(null);
    const [ weatherIconUrl, setWeatherIconUrl ] = useState(null);

    useEffect(() => {
        weatherService.getWeather(lat, lng)
            .then(data => {
                setWeather(data)
                setWeatherIconUrl(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
                console.log("getWeather data", data)
            })
    }, [country]);



    return (
        <div>
            <h2>Weather in {capital}</h2>
            {weather ? 
            <>
                <p>temperature {weather.main.temp} Celcius</p>
                <img src={weatherIconUrl} />
                <p>wind {weather.wind.speed}m/s</p>
            </> :
            <p>Loading weather data...</p>
            }
        </div>
    )
}

export default WeatherData;