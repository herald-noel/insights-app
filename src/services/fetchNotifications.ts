import axios from 'axios'
import { API_BASE_URL } from '../data/apiUrl'

const BASE_URL = API_BASE_URL

const fetchUpdates = (onUpdate) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
  axios
    .get(`${BASE_URL}/notifications/updates`, { headers })
    .then((response) => {
      if (response.status === 200) {
        onUpdate(response.data)
      }
      setTimeout(() => fetchUpdates(onUpdate), 0)
    })
    .catch((error) => {
      if (error.response.status === 408) {
        fetchUpdates(onUpdate)
      } else {
        console.error(error)
        setTimeout(() => fetchUpdates(onUpdate), 5000) // Retry after 5 seconds
      }
    })
}

export default fetchUpdates
