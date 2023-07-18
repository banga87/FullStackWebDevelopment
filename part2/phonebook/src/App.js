import { useEffect, useState } from 'react'
import People from './components/People'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  
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
      <Filter filter={filter} setFilter={setFilter} />

      <h2>Add a new person</h2>
      <PersonForm 
        persons={ persons }
        setPersons={ setPersons }
        setNewNumber={ setNewNumber }
        setNewName={ setNewName }
        newName={ newName }
        newNumber={ newNumber }
      />
      
      <h2>Numbers</h2>
      <People 
        persons={ persons }
        setPersons={ setPersons } 
        filter={ filter }
      />
    </div>
  )
}

export default App