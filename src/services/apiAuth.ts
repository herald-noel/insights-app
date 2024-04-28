import axios from 'axios'
import { API_BASE_URL } from '../data/apiUrl'

const BASE_URL = API_BASE_URL

export const axiosInstance = (function () {
  let instance

  async function createInstance() {
    const JWT_TOKEN = await localStorage.getItem('token')

    const headers = JWT_TOKEN ? { Authorization: `Bearer ${JWT_TOKEN}` } : {}

    return axios.create({
      baseURL: BASE_URL,
      headers: headers,
      // Add other Axios configuration options here if needed
    })
  }

  return async () => {
    if (!instance) {
      instance = await createInstance()
    }

    return instance
  }
})()

export const useFetchDataFromApi = async (
  endpoint: string,
  method: string,
  params?: any,
  payload?: any
) => {
  try {
    const instance = await axiosInstance()
    const { data } = await instance({
      url: endpoint,
      method: method,
      params: params,
      data: payload,
    })
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
