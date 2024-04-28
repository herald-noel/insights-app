import { Grid, Divider, Box, Avatar } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import CommentButton from '../pages/Comments/CommentButton'
import '../styles/reactMarkdown.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { REQUEST } from '../data/requests.constants'
import { useEffect, useState } from 'react'
import RecommendButton from '../pages/Blog/components/RecommendButton'

function BlogPost() {
  const location = useLocation()
  const pathnameParts = location.pathname.split('/')
  const blogId = pathnameParts[pathnameParts.length - 1]

  const url = `posts/get/blog/${blogId}`
  const { data, fetchData } = useFetch(url, REQUEST.GET)
  const [responseData, setResponseData] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(data)
    setResponseData(data)
  }, [data])

  return (
    <Grid
      item
      xs={12}
      md={6}
      py={1}
      width={'800px'}
      maxWidth={'800px'}
      minWidth={'100px'}
    >
      {responseData && (
        <>
          <Grid
            sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          ></Grid>
          <h1 style={{ fontSize: '42px' }}>{responseData.title}</h1>
          {responseData.user && (
            <Box display={'flex'} alignItems={'center'}>
              <Avatar>
                {responseData.user.firstname[0]}
                {responseData.user.lastname[0]}
              </Avatar>
              <Box sx={{ marginY: '20px', marginLeft: '10px' }}>
                <p
                  style={{ fontSize: '16px' }}
                >{`${responseData.user.firstname} ${responseData.user.lastname}`}</p>
                <p style={{ fontSize: '14px', color: 'grey' }}>
                  {responseData.createdAt}
                </p>
              </Box>
            </Box>
          )}
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box marginY={'1px'} display={'flex'}>
              <RecommendButton likes={responseData.likes} />
              <CommentButton />
            </Box>
          </Box>
          <Divider />
          <Box marginTop={'20px'}>
            <ReactMarkdown
              className="blog-line-break"
              rehypePlugins={[rehypeRaw]}
            >
              {responseData.content}
            </ReactMarkdown>
          </Box>
        </>
      )}
    </Grid>
  )
}

export default BlogPost
