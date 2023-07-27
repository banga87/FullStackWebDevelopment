import axios from "axios"
import personService from "../services/personService"

const PersonForm = ({ 
  persons,
  setPersons,
  setNewName,
  newName,
  setNewNumber,
  newNumber,
  setConfirmationMessage
}) => {

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (personExists) {
        const confirmUpdate = window.confirm(`${newName} already exists in the Phonebook. Replace the old number with the new one?`)

        if (confirmUpdate) {
          const updatedPerson = {...personExists, number: newNumber}
          personService.update(updatedPerson.id, updatedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
              setNewName('')
              setNewNumber('')
            })
        } else {
          setNewName('')
          setNewNumber('')
        }
    } else {
      const nameObject = { name: newName, number: newNumber }
      personService.create(nameObject)
        .then(newPerson => {
          setConfirmationMessage(newName)
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .then(
          setTimeout(() => {
            setConfirmationMessage(null)
          }, 5000)
        )
    }
  }

  return (
    <div>
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
    </div>
  )
}

export default PersonForm;