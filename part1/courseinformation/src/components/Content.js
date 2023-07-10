import Part from "./Part";

const Content = (props) => {

  console.log('PART 1', props.parts.part1);

  return (
    <div>
      <Part part={props.parts.part1} total={props.total.exercises1}/>
      <Part part={props.parts.part2} total={props.total.exercises2}/>
      <Part part={props.parts.part3} total={props.total.exercises3}/>
    </div>
  )
}

export default Content;