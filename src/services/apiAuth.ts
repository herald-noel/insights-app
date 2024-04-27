import axios from 'axios'
import { API_BASE_URL } from '../data/apiUrl'

const BASE_URL = API_BASE_URL

const JWT_TOKEN = localStorage.getItem('token')

const headers = {
  Authorization: 'Bearer ' + JWT_TOKEN,
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
})

export const useFetchDataFromApi = async (
  endpoint: string,
  method: string,
  params?: any,
  payload?: any
) => {
  try {
    const { data } = await axiosInstance({
      url: endpoint,
      method: method,
      params: params,
      data: payload,
    })
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
