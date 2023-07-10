import Part from "./Part";

const Content = ({ course }) => {

  console.log('CONTENT', course.parts )

  return (
    <div>
      { course.parts.map((part, index) => {
        return <Part key={ index } part={ part } />
      })}
    </div>
  )
}

export default Content;