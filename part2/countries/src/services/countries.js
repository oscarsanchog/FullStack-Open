import axios from 'axios'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const getWeather = (lat, lon) =>
  axios
    .get(`${BASE_URL}//data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then((response) => response.data)

const getIconWeather = (id) => axios.get(`https://openweathermap.org/img/wn/${id}@2x.png`) 

export default { getAll, getWeather }
