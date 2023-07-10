const Header = ({ course }) => {
  console.log("HEADER", course.name)
  return (
    <div>
      <h1>{ course.name }</h1>
    </div>
  )
}

export default Header;