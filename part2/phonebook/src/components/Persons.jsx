const Persons = ({ persons, deletePerson }) => {
  //console.log(deletePerson)
  
  return(
  <ul>
    {persons.map(({ id, name, number }) => (
      <li key={name}>
        <span>{name}: {number}</span>
        <button onClick={deletePerson(id)}>Delete</button>
      </li>
    ))}
  </ul>
)}
export default Persons
