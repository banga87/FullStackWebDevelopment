import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())

    if (nameExists) {
      alert(`${newName} is already in the phonebook`)
      setNewName('')
    } else {
      const nameObject = { name: newName, number: newNumber }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: { newName } + { newNumber }</div>

        <div>
          filter shown with <input
            onChange={ handleFilterChange }
            value={ filter }
          />
        </div>

      <h2>add a new</h2>
      <form onSubmit={ addPerson }>
        <div>
          name: <input 
            onChange={ handleNameChange }
            value={ newName }
          />
        </div>
        <div>
          number: <input 
            onChange={ handleNumberChange }
            value={ newNumber }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      {personsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App