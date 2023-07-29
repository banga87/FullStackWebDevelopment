import { useState } from "react";

const Country = ({ country, type }) => {

    if (type === 'basic') {
        return (
            <div className="basic">
                <p>{country.name.common}</p> <button>click</button>
            </div>
        )
    } else if (type === 'advanced') {
        return (
            <div>
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


    return (
        <div>

        </div>
    )
}

export default Country;