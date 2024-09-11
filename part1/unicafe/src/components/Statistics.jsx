import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const getAll = () => good + neutral + bad
  const getAverage = () => (good + -1 * bad) / getAll()
  const getPositive = () => Math.floor((good / getAll()) * 100)

  return (
    <>
      <StatisticLine label={'good'} value={good} />
      <StatisticLine label={'neutral'} value={neutral} />
      <StatisticLine label={'bad'} value={bad} />
      <StatisticLine label={'all'} value={getAll()} />
      <StatisticLine label={'average'} value={getAverage()} />
      <StatisticLine label={'positive'} value={`${getPositive()}%`} />
    </>
  )
}

export default Statistics
