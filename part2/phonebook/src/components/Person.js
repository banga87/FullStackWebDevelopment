import personService from '../services/personService'


const Person = ({ person, persons, setPersons, setMessage }) => {

  const deletePerson = (event) => {
    event.preventDefault()
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.deleteObject(person.id)
        .then(setPersons(
          persons.filter(p => p.id !== person.id)
          )
        )
        .catch(error => {
          setMessage({message: `Information of ${person.name} has already been removed from server`, type: 'error'})
          console.log('ERROR', error)
        })
        .then(
          setTimeout(()=> {
            setMessage({ message: null, type: null })
          }, 5000)
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