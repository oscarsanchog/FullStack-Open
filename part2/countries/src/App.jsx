import { useState } from 'react'
import countriesService from './services/countries'
import { useEffect } from 'react'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  const getCountries = () => {
    countriesService.getAll().then((countries) => setCountries(countries))
  }

  useEffect(getCountries, [])

  const toPlainText = (text) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()

  const handleFilter = (event) => {
    const filteredCountries = countries.filter((country) => {
      const countryToPlainText = toPlainText(country.name.common)
      const searchToPlainText = toPlainText(event.target.value)
      return countryToPlainText.includes(searchToPlainText)
    })
    setFilteredCountries(filteredCountries)
    !event.target.value && setFilteredCountries([])
  }

  return (
    <>
      <Filter handleFilter={handleFilter} />
      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </>
  )
}
export default App
