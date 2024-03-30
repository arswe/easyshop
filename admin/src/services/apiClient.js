import { Axios } from 'axios'

const apiClient = Axios.create({
  baseURL: 'http://localhost:8080/api',
})

export default apiClient
