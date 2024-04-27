import { useEffect, useState } from 'react'
import { useFetchDataFromApi } from '../services/apiAuth'

const useFetch = (url: string, method: string, params?: any) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const fetchData = async (payload?: any) => {
    setLoading(true)
    setError(null)
    try {
      const response = await useFetchDataFromApi(url, method, params, payload)
      setData(response)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchData }
}

export default useFetch
