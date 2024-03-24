import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [newFilter, setNewFilter] = useState([])

  const handleOnChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.id]: event.target.value,
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const repeatedName = persons.find(({ name }) => name === newPerson.name)

    if (repeatedName)
      window.alert(`${newPerson.name} is already added to phonebook`)
    else {
      setPersons(persons.concat(newPerson))
      setNewPerson({ name: '', number: '' })
    }
  }

  const toPlainText = (text) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()

  const handleFilter = (event) => {
    const searchTerm = toPlainText(event.target.value)

    const filteredPersons = persons.filter((person) => {
      const personNamePlainText = toPlainText(person.name)
      const searchToPlainText = toPlainText(searchTerm)
      //console.log(personNamePlainText.includes(searchToPlainText))
      return personNamePlainText.includes(searchToPlainText)
    })
    setNewFilter(filteredPersons)
    !event.target.value && setNewFilter([])
  }
  //console.log(newFilter)

  return (
    <div>
      <h1>Phonebook</h1>
      
      <Filter handleFilter={handleFilter} newFilter={newFilter} />

      <h2>Add a new</h2>
      <PersonForm
        newPerson={newPerson}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
