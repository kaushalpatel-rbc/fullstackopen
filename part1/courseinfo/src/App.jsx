import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10,
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      },
    ],
  }

  const total = course.parts.reduce((sum, part) => sum + part.exercise, 0)

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  )
}

export default App
