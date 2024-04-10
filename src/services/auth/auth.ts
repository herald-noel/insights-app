import axios from 'axios'
import { Credentials, SignUpData } from './authInterface'
import { API_BASE_URL } from '../../data/apiUrl'

const BASE_URL = `${API_BASE_URL}` // my endpoint says that it will return a 403 forbidden error if applied so that's why I don't use this

// Function to authenticate user (login)
export const login = async (credentials: Credentials) => {
  try {
    console.log('Login credentials:', credentials)
    const response = await axios.post(
      `http://localhost:8080/api/v1/auth/authenticate`,
      credentials
    )
    const { token } = response.data
    localStorage.setItem('token', token)
    return token
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}

// Function to register a new user
export const register = async (signUpData: SignUpData) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/api/v1/auth/register`,
      signUpData
    )
    const { token } = response.data
    localStorage.setItem('token', token)
    return token
  } catch (error) {
    throw error
  }
}

// Function to log out user
export const logout = () => {
  localStorage.removeItem('token')
}
