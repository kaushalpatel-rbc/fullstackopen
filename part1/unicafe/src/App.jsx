import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button
        onClick={() => {
          setGood(good + 1)
        }}
      >
        good
      </Button>
      <Button
        onClick={() => {
          setNeutral(neutral + 1)
        }}
      >
        neutral
      </Button>
      <Button
        onClick={() => {
          setBad(bad + 1)
        }}
      >
        bad
      </Button>
      <h2>statistics</h2>
      {good + neutral + bad === 0 && <p>No feedback given</p>}
      {good + neutral + bad > 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </>
  )
}

export default App
