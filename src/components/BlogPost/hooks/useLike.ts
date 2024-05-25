import { useEffect, useState } from 'react'
import { REQUEST } from '../../../data/requests.constants'
import useFetch from '../../../hooks/useFetch'

const useLike = (blogId: string) => {
  const userLikeUrl = `/likes/blog/${blogId}`
  const isUserLikeUrl = `/likes/user/blog/${blogId}`

  const { data: likesData, fetchData: likeBlog } = useFetch(
    userLikeUrl,
    REQUEST.POST
  )
  const { data: isUserLike, fetchData: fetchUserLike } = useFetch(
    isUserLikeUrl,
    REQUEST.GET
  )

  const [numLikes, setNumLikes] = useState('')

  useEffect(() => {
    fetchUserLike()
  }, [])

  useEffect(() => {
    setNumLikes(likesData)
  }, [likesData])

  const toggleLike = async () => {
    try {
      await likeBlog()
      await fetchUserLike()
    } catch (error) {}
  }

  return {
    toggleLike,
    numLikes,
    isUserLike,
  }
}

export default useLike
