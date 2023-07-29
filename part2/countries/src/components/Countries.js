import Country from "./Country";

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
                return <Country key={i} country={country} type={"basic"} />
            })
        )
    } else if (numCountries === 1) {
        return (
            <Country country={countries[0]} type={"advanced"} />
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