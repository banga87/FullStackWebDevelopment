import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  
  const course = 'Half Stack application development'
  
  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component'
  }

  const total = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} total={total} />
      <p>Number of exercises {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )
}

export default App