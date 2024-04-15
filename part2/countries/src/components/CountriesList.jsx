const CountriesList = ({ countries }) =>
  countries.length > 11 ? (
    <p>Too many matches, specify the search </p>
  ) : (
    <ul>
      {countries.map((country) => (
        <li key={country.name.official}>{country.name.common}</li>
      ))}
    </ul>
  )
  
export default CountriesList
