import { useState, useEffect } from 'react';

const Button = ({ handleClick, text }) => {
  return (
  <button onClick={ handleClick }>
    { text }
  </button>
  )
}

const Statistics = ({ state }) => {
  console.log(state);
  if (state.total === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <table>
        <tbody>
          {Object.keys(state).map(key => (
            <tr key={key}>
              <th>{key}</th>
              <td>{key === 'positive'? `${state[key]}%` : state[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const state = {
    'good': good,
    'neutral': neutral,
    'bad': bad,
    'total': total,
    'average': average,
    'positive': positive
  }

  const incrementByOne = ( state, setState ) => () => {
    setState(state + 1);
  }

  // Update total
  useEffect(()=> {
    setTotal(good + neutral + bad)
    console.log(total)
  }, [good, neutral, bad]);

  // Update average
  useEffect(()=> {
    if (total !== 0) {
      const avg = (good + bad*-1) / total;
      setAverage(avg);
    } else {
      setAverage(0);
    }
  }, [good, neutral, bad])

  // Update percentageOfPositive
  useEffect(()=> {
    if (good !== 0) {
      setPositive((good / total) * 100)
    }
  }, [total])

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={ incrementByOne(good, setGood) } text='good' />
      <Button handleClick={ incrementByOne(neutral, setNeutral) } text='neutral' />
      <Button handleClick={ incrementByOne(bad, setBad) } text='bad' />
      <h1>statistics</h1>
      <Statistics state={state} />
    </div>
  )
}

export default App