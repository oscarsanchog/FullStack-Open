const Header = ({ course }) => (
  <header>
    <h1>{course.name}</h1>
  </header>
)

const Content = ({ course }) => {
  const { parts } = course

  return (
    <>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises2}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises3}
      </p>
    </>
  )
}

const Total = ({ course }) => {
  const { parts } = course

  return (
    <p>
      Number of excercises:{' '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
       {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ]
  }
  

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
