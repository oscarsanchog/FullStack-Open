import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then((response) => response.data)

const postPerson = (newPersonObject) =>
  axios.post(baseUrl, newPersonObject).then((response) => response.data)

const deletePerson = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((response) => response.data)

const putNumber = (id, newObject) => 
  axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)

export default { getAll, postPerson, deletePerson, putNumber }
