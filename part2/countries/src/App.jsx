import { useState } from 'react'
import countriesService from './services/countries'
import { useEffect } from 'react'
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'
import Country from './components/Country'
import Weather from './components/Weather'

//console.log('code',api)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countriesService.getAll().then((countries) => setCountries(countries))

    filteredCountries.length === 1 &&
      countriesService
        .getWeather(
          filteredCountries[0].latlng[0],
          filteredCountries[0].latlng[1]
        )
        .then((weather) => setWeather(weather))

    filteredCountries.length !== 1 && setWeather(null)
  }, [filteredCountries.length === 1])

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
      {countries.length ? <Filter handleFilter={handleFilter} />: <div>Wait a moment</div>}
      {filteredCountries.length === 1 ? (
        <>
          <Country country={filteredCountries[0]} />
          {weather && <Weather countryName={filteredCountries[0].name.common} weather={weather} />}
        </>
      ) : (
        <CountriesList countries={filteredCountries} />
      )}
    </>
  )
}
export default App
