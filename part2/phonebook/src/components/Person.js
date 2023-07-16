const Person = ({ person, key }) => {
  return (
    <p key={ key }>{person.name} {person.number}</p>
  )
}

export default Person;