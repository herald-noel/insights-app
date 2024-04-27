import Mainlayout from '../../layout/Mainlayout'
import { Box } from '@mui/material'
import CardPost from '../../components/CardPost'
import CreateBlogButton from './components/CreateBlogButton'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import { useEffect, useState } from 'react'
import HomePagination from './components/HomePagination'

const Home = () => {
  const url = '/posts/all'
  const [responseData, setResponseData] = useState({})
  const [page, setPage] = useState({ page: 0 })
  const { data, fetchData } = useFetch(url, REQUEST.GET, page)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data === null) {
      return
    }
    console.log(data)
    setResponseData(data)
  }, [data])

  return (
    <Mainlayout>
      <Box>
        <>
          <CreateBlogButton />
          {responseData.content &&
            responseData.content.map((post) => (
              <CardPost key={post.title} post={post} />
            ))}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {responseData.content && (
              <HomePagination length={responseData.totalPages} />
            )}
          </Box>
        </>
      </Box>
    </Mainlayout>
  )
}

export default Home
