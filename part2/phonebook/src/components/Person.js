import personService from '../services/personService'


const Person = ({ person, persons, setPersons }) => {

  const deletePerson = (event) => {
    event.preventDefault()
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deleteObject(person.id)
        .then(setPersons(
          persons.filter(p => p.id !== person.id)
          )
        )
    }
  }

  return (

    <>
      <p>{person.name} {person.number}</p>
      <button onClick={deletePerson}>delete</button>
    </>
  )
}

export default Person;