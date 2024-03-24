const Persons = ({ persons }) => (
  <ul>
    {persons.map(({ name, number }) => (
      <li key={name}>
        <span>{name}: </span>
        <span>{number}</span>
      </li>
    ))}
  </ul>
)
export default Persons