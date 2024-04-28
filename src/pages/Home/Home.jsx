import Mainlayout from '../../layout/Mainlayout'
import { Box, Pagination } from '@mui/material'
import CardPost from '../../components/CardPost'
import CreateBlogButton from './components/CreateBlogButton'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import { useEffect, useState } from 'react'

const Home = () => {
  const url = '/posts/all'
  const [page, setPage] = useState(0)
  const [pageParam, setPageParam] = useState({ page: 0 })
  const [responseData, setResponseData] = useState({})

  const { data, fetchData } = useFetch(url, REQUEST.GET, pageParam)

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    if (data === null) {
      return
    }
    setResponseData(data)
  }, [data])

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
    setPageParam({ page: newPage - 1 })
  }

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
              <Pagination
                page={page}
                count={responseData.totalPages}
                shape="rounded"
                size="large"
                onChange={handlePageChange}
              />
            )}
          </Box>
        </>
      </Box>
    </Mainlayout>
  )
}

export default Home
