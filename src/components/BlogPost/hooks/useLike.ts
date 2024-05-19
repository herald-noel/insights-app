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
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    fetchUserLike()
  }, [])

  useEffect(() => {
    setNumLikes(likesData)
  }, [likesData])

  useEffect(() => {
    console.log(isUserLike)
    setIsLike(isUserLike)
  }, [isUserLike])

  const toggleLike = async () => {
    try {
      await likeBlog()
      await fetchUserLike()
    } catch (error) {
      console.log(error)
    }
  }

  return {
    toggleLike,
    numLikes,
    isUserLike,
  }
}

export default useLike
