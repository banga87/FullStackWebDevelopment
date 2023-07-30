import AdvancedCountry from "./AdvancedCountry";
import BasicCountry from "./BasicCountry";

const Countries = ({ countries }) => {

    const numCountries = countries.length;

    if (numCountries > 10) {
        return (
            <div>
                Too many countries. Please refine your search.
            </div>
        )
    } else if (numCountries > 1) {
        return (
            countries.map((country, i) => {
                return <BasicCountry key={ i } country={ country } />
            })
        )
    } else if (numCountries === 1) {
        return (
            <AdvancedCountry country={countries[0]}/>
        )
    }

    return (
        <div>
            No countries found
        </div>
    )


    // return (
    //     <div>
    //         {numCountries > 10 
    //             ? "Too many countries. Please refine your search."
    //             : `Number of countries: ${numCountries}`
    //         }
    //     </div>
    // )
}

export default Countries;