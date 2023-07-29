const CountryForm = ({ setCountrySearch }) => {

    const handleChange = (event) => {
        const searchValue = event.target.value.toLowerCase()
        setCountrySearch(searchValue)
    }

    return (
        <div>
            find countries
            <form>
                <div>
                    <input onChange={ handleChange }></input>
                </div>
            </form>
        </div>
    )
}

export default CountryForm;