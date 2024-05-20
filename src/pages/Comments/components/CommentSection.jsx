import { Button, List, ListItem } from '@mui/material'
import CommentBox from './CommentBox'
import Comment from './Comment'
import useFetch from '../../../hooks/useFetch'
import { REQUEST } from '../../../data/requests.constants'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const CommentSection = () => {
  const location = useLocation()

  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const pathnameParts = location.pathname.split('/')
  const blogId = pathnameParts[pathnameParts.length - 1]

  const url = `/comments/all`
  const urlSubmit = `/comments/create/comment/${blogId}`
  const { data, fetchData } = useFetch(url, REQUEST.GET, { blogId: blogId })
  const { fetchData: submitCommentData } = useFetch(urlSubmit, REQUEST.POST)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data !== null) {
      setComments(data)
      console.log('comments')
      console.log(data)
    }
  }, [data])

  const handleRespond = async () => {
    console.log(comment)
    if (comment.trim() === '') {
      return
    }
    const userComment = {
      comment: comment,
    }
    await submitCommentData(userComment)
    setComment('')
    fetchData()
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleCancelButton = () => {
    setComment('')
  }

  const handleUpdatedData = () => {
    fetchData()
  }

  return (
    <List>
      <ListItem key="comment">
        <CommentBox
          handleCommentChange={handleCommentChange}
          comment={comment}
          label={'What are your thoughts?'}
        >
          <>
            <Button
              size="small"
              sx={{ color: 'grey' }}
              onClick={handleCancelButton}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ bgcolor: 'sky-blue', color: 'white' }}
              onClick={handleRespond}
            >
              Respond
            </Button>
          </>
        </CommentBox>
      </ListItem>

      {comments.map((data, index) => (
        <ListItem key={index}>
          <Comment data={data} handleUpdatedData={handleUpdatedData} />
        </ListItem>
      ))}
    </List>
  )
}

export default CommentSection
