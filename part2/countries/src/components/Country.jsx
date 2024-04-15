const Country = ({ country }) => (
    <section>
      <h2>{country.name.common}</h2>

      <div>
        {country.capital.map((capital) => (
          <p key={capital}>Capital: {capital}</p>
        ))}
        <p>Area: {country.area}</p>
      </div>

      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>

      <img src={country.flags.png} alt={country.flags.alt} />
    </section>
  )

export default Country
