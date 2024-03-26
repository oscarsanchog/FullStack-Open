import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [newFilter, setNewFilter] = useState([])
  
  const getNotes = () => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
  }

  useEffect(getNotes, [])

  const handleOnChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.id]: event.target.value,
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const repeatedName = persons.find(({ name }) => name === newPerson.name)

    repeatedName
      ? window.alert(`${newPerson.name} is already added to phonebook`)
      : (setPersons(persons.concat(newPerson)),
        setNewPerson({ name: '', number: '' }))
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