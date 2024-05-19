import { useEffect, useState } from 'react'
import { REQUEST } from '../../../data/requests.constants'
import useFetch from '../../../hooks/useFetch'

const useLike = (blogId: string) => {
  const url = `/likes/blog/${blogId}`
  const { data, fetchData } = useFetch(url, REQUEST.POST)
  const [numLikes, setNumLikes] = useState('')

  useEffect(() => {
    setNumLikes(data)
  }, [data])

  const toggleLike = async () => {
    try {
      await fetchData()
      console.log('success toggle')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    toggleLike,
    numLikes,
  }
}

export default useLike
