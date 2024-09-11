const StatisticLine = (props) => {
  const { label, value } = props
  return (
    <>
      <p>
        {label} {value}
      </p>
    </>
  )
}

export default StatisticLine
