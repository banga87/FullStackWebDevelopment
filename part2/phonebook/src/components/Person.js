const Person = ({ person, key }) => {
  return (
    <div>
      <p key={ key }>{person.name} {person.number}</p>
    </div>
  )
}

export default Person;