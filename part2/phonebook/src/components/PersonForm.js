const PersonForm = ({ 
  persons,
  setPersons,
  setNewName,
  newName,
  setNewNumber,
  newNumber
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