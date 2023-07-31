import WeatherData from "./WeatherData";
import { useState } from "react";
import '../styles/Country.css';

const AdvancedCountry = ({ country }) => {

    return (
        <div className="advanced">
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h4>Languages</h4>
            <p style={{listStyleType: "none"}}>
                {Object.values(country.languages).map((language, i) => {
                    return <li key={i}>{language}</li>
                })}
            </p>
            <img className="country-flag" src={country.flags.png} alt={country.flags.alt}/>
            <WeatherData country={ country } />
        </div>
    )
}

export default AdvancedCountry;