import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const postNote = (newPersonObject) =>
  axios.post(baseUrl, newPersonObject).then((response) => response.data)

  
  
export default { getAll, postNote }