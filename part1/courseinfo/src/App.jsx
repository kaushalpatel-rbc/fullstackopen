import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [
    {
      name: part1,
      exercise: exercises1,
    },
    {
      name: part2,
      exercise: exercises2,
    },
    {
      name: part3,
      exercise: exercises3,
    },
  ]

  const total = exercises1 + exercises2 + exercises3

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </>
  )
}

export default App
