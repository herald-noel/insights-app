import axios from 'axios'
import { Credentials, SignUpData } from './authInterface'
import { API_BASE_URL } from '../../data/apiUrl'

const BASE_URL = API_BASE_URL + '/auth'

// Function to authenticate user (login)
export const login = async (credentials: Credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/authenticate`, credentials)
    const { token } = response.data
    localStorage.setItem('token', token)
    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

// Function to register a new user
export const register = async (signUpData: SignUpData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, signUpData)
    const { token } = response.data
    localStorage.setItem('token', token)
    return response.data
  } catch (error) {
    throw error
  }
}

// Function to log out user
export const logout = async () => {
  try {
    localStorage.removeItem('token')
    await axios.post(`${BASE_URL}/logout`)
  } catch (error) {
    throw error
  }
}
