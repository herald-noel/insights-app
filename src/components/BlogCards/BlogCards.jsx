import PropTypes from 'prop-types'
import { Box, Pagination, Typography } from '@mui/material'
import CardBlog from '../CardBlog'
import CreateBlogButton from './components/CreateBlogButton'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import { useEffect, useState } from 'react'
import useSearch from '../../hooks/useSearch'
import { useLocation } from 'react-router-dom'
import { PATH } from '../../data/paths'

const BlogCards = (props) => {
  const location = useLocation()
  const { url, isNewPostBtn } = props
  const [pageNumber, setPageNumber] = useState(1)
  const [params, setParams] = useState({})
  const [responseData, setResponseData] = useState({})

  const { data, fetchData } = useFetch(url, REQUEST.GET, params)

  const { getSearch } = useSearch()

  const search = getSearch()

  useEffect(() => {
    console.log(search)
  }, [search])

  useEffect(() => {
    fetchData()
  }, [params])

  useEffect(() => {
    if (location.pathname === PATH.HOME) {
      fetchData()
    }
  }, [location])

  useEffect(() => {
    setParams({ page: pageNumber - 1, query: search })
  }, [pageNumber, search])

  useEffect(() => {
    console.log(responseData)
  }, [responseData])

  useEffect(() => {
    if (data === null) {
      return
    }
    setResponseData(data)
  }, [data])

  const handlePageChange = (event, newPage) => {
    console.log(pageNumber)
    setPageNumber(newPage)
  }

  return (
    <>
      {isNewPostBtn && <CreateBlogButton />}
      {responseData.content && responseData.content.length > 0 ? (
        responseData.content.map((post, index) => (
          <CardBlog key={`${post.id}-${index}`} post={post} />
        ))
      ) : (
        <Typography variant="h6" align="center" color="textSecondary">
          No posts found.
        </Typography>
      )}

      {responseData.totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            page={pageNumber}
            count={responseData.totalPages}
            shape="rounded"
            size="large"
            onChange={handlePageChange}
          />
        </Box>
      )}
    </>
  )
}

BlogCards.propTypes = {
  url: PropTypes.string.isRequired,
  isNewPostBtn: PropTypes.bool.isRequired,
}

export default BlogCards
