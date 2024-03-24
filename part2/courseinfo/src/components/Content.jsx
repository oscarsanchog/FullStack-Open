const Content = ({ course }) => {
  const { parts } = course
  return (
    <ul>
      {parts.map(({ name, exercises }) => (
        <p key={name}>
          {name} {exercises}
        </p>
      ))}
    </ul>
  )
}

export default Content