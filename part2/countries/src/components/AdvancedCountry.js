import { useState } from "react";
import '../styles/Country.css';

const AdvancedCountry = ({ country }) => {

    return (
        <div className="advanced">
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h4>Languages</h4>
            <p style={{listStyleType: "none"}}>
                {Object.values(country.languages).map((language, i) => {
                    return <li key={i}>{language}</li>
                })}
            </p>
            <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
    )
}

export default AdvancedCountry;