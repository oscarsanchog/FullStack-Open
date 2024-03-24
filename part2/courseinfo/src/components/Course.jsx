import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ courses }) =>
  courses.map((course) => (
    <div key={course.id}>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  ))

export default Course
