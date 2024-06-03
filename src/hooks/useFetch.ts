import { useEffect, useState, useCallback } from 'react'
import { useFetchDataFromApi } from '../services/apiAuth'

const useFetch = (url: string, method: string, params?: any) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const fetchData = useCallback(
    async (payload?: any) => {
      setLoading(true)
      console.log('loading =', loading)
      setError(null)
      try {
        const response = await useFetchDataFromApi(url, method, params, payload)
        setData(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [url, method, params]
  )

  return { data, loading, error, fetchData }
}

export default useFetch
