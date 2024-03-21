import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handler}>{props.name}</button>
)

const Display = (props) => (
  <p>{props.name}: {props.count}</p>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handler = feedback => () => {
    feedback === 'good' && setGood(good + 1)
    feedback === 'neutral' && setNeutral(neutral + 1)
    feedback === 'bad' && setBad(bad + 1)
  }

  return (
    <main>
      <div>
        <h2>Give feedback</h2>
        <Button handler={handler('good')} name={'Good'}/>
        <Button handler={handler('neutral')} name={'Neutral'}/>
        <Button handler={handler('bad')} name={'Bad'}/>
      </div>
      
      <div>
        <h2>Statistics</h2>
        <Display name={'Good'} count={good} />
        <Display name={'Neutral'} count={neutral} />
        <Display name={'Bad'} count={bad} />
      </div>
    </main>
  )
}
export default App
