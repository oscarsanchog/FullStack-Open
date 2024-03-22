import { useState } from 'react'

const Button = (props) => <button onClick={props.handler}>{props.name}</button>

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ states }) => {
  const { good, neutral, bad, total, average, positive } = states

  return good === 0 && neutral === 0 && bad === 0 ? (
    <p>No feedback given</p>
  ) : (
    <table>
      <tbody>
        <StatisticsLine text='Good' value={good} />
        <StatisticsLine text='Neutral' value={neutral} />
        <StatisticsLine text='Bad' value={bad} />
        <StatisticsLine text='All' value={total} />
        <StatisticsLine text='Average' value={average} />
        <StatisticsLine text='Positive' value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handler = (feedback) => () => {
    let goodNow = good
    let neutralNow = neutral
    let badNow = bad
    //let totalNow

    if (feedback === 'good') {
      goodNow = good + 1
      setGood(goodNow)
    }
    if (feedback === 'neutral') {
      neutralNow = neutral + 1
      setNeutral(neutralNow)
    }
    if (feedback === 'bad') {
      badNow = bad + 1
      setBad(badNow)
    }

    const sum = goodNow + neutralNow + badNow
    setTotal(sum)
    setAverage(sum / 3)
    setPositive((goodNow * 100) / sum)
  }

  return (
    <main>
      <div>
        <h2>Give feedback</h2>
        <Button handler={handler('good')} name={'Good'} />
        <Button handler={handler('neutral')} name={'Neutral'} />
        <Button handler={handler('bad')} name={'Bad'} />
      </div>

      <div>
        <h2>Statistics</h2>
        <Statistics states={{ good, neutral, bad, total, average, positive }} />
      </div>
    </main>
  )
}
export default App
