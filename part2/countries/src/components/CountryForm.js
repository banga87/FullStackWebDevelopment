import '../styles/CountryForm.css'

const CountryForm = ({ setCountrySearch }) => {

    const handleChange = (event) => {
        const searchValue = event.target.value.toLowerCase()
        setCountrySearch(searchValue)
    }

    return (
        <div className="container">
            <p className="header">find countries</p>
            <form>
                <div>
                    <input onChange={ handleChange }></input>
                </div>
            </form>
        </div>
    )
}

export default CountryForm;