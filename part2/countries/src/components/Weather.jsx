const Weather = ({ countryName, weather }) => {
  const kelvinToCelcius = Math.floor(weather.main.temp - 273.15)
  
  return (
    <div>
      <h2>Wheather in {countryName}</h2>
      <p>Temperature: {kelvinToCelcius}° Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
      <p>{weather.weather[0].main}: {weather.weather[0].description}</p>
    </div>
  )
}
export default Weather