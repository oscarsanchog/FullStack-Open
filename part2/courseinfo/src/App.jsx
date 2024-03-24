import Course from './components/Course'

const App = ({ courses }) => (
  <>
    <h1>Web development curriculum</h1>
    <Course courses={courses} />
  </>
)

export default App
