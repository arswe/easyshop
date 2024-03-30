import { Axios } from 'axios'

const apiClient = Axios.create({
  baseURL: 'https://api.example.com',
})

export default apiClient
