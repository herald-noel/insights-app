import { useState, useEffect, useCallback } from 'react'
import useFetch from './useFetch'

interface ImageData {
  id: string
  imageURL: string
}

const useFetchImage = (blogId: string) => {
  const [imageData, setImageData] = useState<ImageData[]>([])
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [imageError, setImageError] = useState<any>(null)

  const { data, loading, error, fetchData } = useFetch(
    `images/get/${blogId}`,
    'GET'
  )

  const fetchImageData = useCallback(async () => {
    try {
      setIsImageLoading(true)
      await fetchData()
    } catch (e) {
      setImageError(e)
    } finally {
      setIsImageLoading(false)
    }
  }, [fetchData])

  useEffect(() => {
    fetchImageData()
  }, [fetchImageData])

  useEffect(() => {
    if (data) {
      setImageData(data)
    }
  }, [data])

  return {
    imageData,
    isImageLoading,
    imageError,
    fetchImageData,
  }
}

export default useFetchImage
