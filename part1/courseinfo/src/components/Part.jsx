const Content = (props) => {
  const { part } = props

  return (
    <>
      <p>
        {part.name} {part.exercise}
      </p>
    </>
  )
}

export default Content
