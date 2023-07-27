import axios from 'axios'
import Filter from './components/Filter'
import Notification from './components/Notification'
import People from './components/People'
import PersonForm from './components/PersonForm'
import personService from './services/personService'
import { useEffect, useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) ;
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({ message: null, type: null });

  
  // GET ALL PERSONS
  const getPersons = () => {
    console.log("effect")
    personService.getAll()
      .then(allPersons => {
        setPersons(allPersons)
      })
    }
  useEffect(getPersons, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={ message.message } type={ message.type } />
      <Filter filter={ filter } setFilter={ setFilter } />

      <h2>Add a new person</h2>
      <PersonForm 
        persons={ persons }
        setPersons={ setPersons }
        newName={ newName }
        setNewName={ setNewName }
        newNumber={ newNumber }
        setNewNumber={ setNewNumber }
        setMessage={ setMessage }
      />
      
      <h2>Numbers</h2>
      <People 
        persons={ persons }
        setPersons={ setPersons } 
        filter={ filter }
        setMessage={ setMessage }
      />
    </div>
  )
}

export default App