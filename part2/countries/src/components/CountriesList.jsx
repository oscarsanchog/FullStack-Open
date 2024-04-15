import { useState } from 'react'
import Country from './Country'

const toggle = false

const CountriesList = ({ countries }) => {
  const [toggle, setToggle] = useState(false)
  const [countryToShow, setCountryToShow] = useState('')

  const handleOnClick = (country) => () => {
    setToggle(!toggle)
    setCountryToShow(country)
  }

  return countries.length > 11 ? (
    <p>Too many matches, specify the search </p>
  ) : (
    <ul>
      {countries.map((country) => (
        <li key={country.name.official}>
          <span>{country.name.common} </span>
          <button onClick={handleOnClick(country.name.common)}>
            Show
          </button>
          {toggle && countryToShow === country.name.common && (
            <Country country={country} />
          )}
        </li>
      ))}
    </ul>
  )
}
export default CountriesList

{
  /* <button onClick={() => setDetail(!detail)}>Show</button>
{detail && <Country country={country}/>} */
}
