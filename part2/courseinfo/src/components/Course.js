import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Header course={course} />
      {course.parts.map(part => <Content key={part.id} part={part} />)}
      <Sum parts={course.parts} />
    </div>
  )
}

export default Course;