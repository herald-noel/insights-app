import { useEffect, useState } from 'react'
import { REQUEST } from '../../../data/requests.constants'
import useFetch from '../../../hooks/useFetch'

const useLike = (blogId: string) => {
  const url = `/likes/blog/${blogId}`
  const { data, fetchData } = useFetch(url, REQUEST.POST)
  const [response, setResponse] = useState('')

  useEffect(() => {
    setResponse(data)
  }, [data])

  const toggleLike = async () => {
    try {
      await fetchData()
      console.log('success like')
    } catch (error) {
      console.log(error)
    }
    console.log('like button ' + blogId)
  }

  return {
    toggleLike,
    response,
  }
}

export default useLike
