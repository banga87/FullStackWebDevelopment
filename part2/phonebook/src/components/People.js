import Person from "./Person";

const People = ({ persons, filter }) => {

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {personsToShow.map(person => 
        <Person person={ person } />
      )}
    </div>
  )
}

export default People;