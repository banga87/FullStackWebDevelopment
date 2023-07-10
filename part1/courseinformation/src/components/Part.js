const Part = ({ part }) => {
  console.log('PART', part)
  
  return (
    <p>{ part.name } { part.exercises }</p>
  )
}

export default Part;