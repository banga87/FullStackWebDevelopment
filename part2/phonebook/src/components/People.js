import Person from "./Person";

const People = ({ persons, filter, setPersons, setMessage }) => {

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {personsToShow.map(person => 
        <Person
          key={ person.id }
          person={ person }
          persons={ persons }
          setPersons={ setPersons }
          setMessage={ setMessage }
        />
      )}
    </div>
  )
}

export default People;