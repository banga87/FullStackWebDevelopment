import { useState, useEffect} from 'react';
import './App.css';
import CountryForm from './components/CountryForm';
import Countries from './components/Countries';
import countryService from './services/countryService';

const App = () => {

  const [ countrySearch, setCountrySearch ] = useState();
  const [ countries, setCountries ] = useState([]);


  const getCountries = () => {
    console.log('getting countries')
    countryService.getAll()
      .then(response => {
        const filteredCountries = response.filter(country => 
          country.name.common.toLowerCase().includes(countrySearch)
        )
      setCountries(filteredCountries)
      })
  }
  useEffect(getCountries, [countrySearch])
  

  return (
    <div className="App">
      <CountryForm setCountrySearch={ setCountrySearch }/>
      <Countries countries={ countries }/>
    </div>
  );
}

export default App;
