import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [newFilter, setNewFilter] = useState([])

  const getPersons = () => {
    personsService.getAll().then((initialPersons) => setPersons(initialPersons))
  }

  const deletePerson = (id) => () => {
    const personToDelete = persons.find((person) => person.id === id)

    window.confirm(`Are you sure about deleting ${personToDelete.name}?`) &&
      personsService.deletePerson(id).then((deletedPerson) => {
        const updatedPersons = persons.filter(
          (person) => person.id !== deletedPerson.id
        )
        setPersons(updatedPersons)
      })
  }

  useEffect(getPersons, [])

  const handleOnChange = (event) => {
    setNewPerson({
      ...newPerson,
      [event.target.id]: event.target.value,
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const repeatedPerson = persons.find(
      (person) => person.name === newPerson.name
    )

    if (repeatedPerson) {
      const confirmedChange = window.confirm(
        `${newPerson.name} is already added to phonebook. Replace the old number with a new one?`
      )
      if (confirmedChange) {
        const updatedPerson = {
          ...repeatedPerson,
          number: newPerson.number,
        }
        personsService
          .putNumber(repeatedPerson.id, updatedPerson)
          .then((response) => {
            const updatedPersons = persons.map((person) =>
              person.id !== repeatedPerson.id ? person : response
            )
            setPersons(updatedPersons)
            setNewPerson({ name: '', number: '' })
          })
      }
    } else {
      personsService.postPerson(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson({ name: '', number: '' })
      })
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

      <Filter
        handleFilter={handleFilter}
        newFilter={newFilter}
        deletePerson={deletePerson}
      />

      <h2>Add a new</h2>
      <PersonForm
        newPerson={newPerson}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App
