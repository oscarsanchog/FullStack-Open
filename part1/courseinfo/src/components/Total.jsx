const Total = ({ course }) => {
  const totalExcercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <p>
      <strong>Number of excercises: {totalExcercises}</strong>
    </p>
  )
}

export default Total