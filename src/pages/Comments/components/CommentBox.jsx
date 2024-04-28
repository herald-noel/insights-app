import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { openDrawer } from '../DrawerFormDialogSlice'
import useFetch from '../../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { REQUEST } from '../../../data/requests.constants'
import { useState } from 'react'

export default function CommentBox() {
  const location = useLocation()
  const pathnameParts = location.pathname.split('/')
  const blogId = pathnameParts[pathnameParts.length - 1]

  const dispatch = useDispatch()
  const url = `/comments/create/comment/${blogId}`
  const { fetchData } = useFetch(url, REQUEST.POST)

  const [comment, setComment] = useState('')

  const handleCommentChange = (event) => {
    setComment(event.target.value)
  }

  const handleRespond = () => {
    if (comment.trim() === '') {
      alert('Invalid comment.')
      return
    }
    const userComment = {
      comment: comment,
    }
    alert('Comment sent.')
    fetchData(userComment)
    setComment('')
  }

  return (
    <Card
      sx={{
        minWidth: 400,

        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <TextField
          id="outlined-multiline-flexible"
          label="What are your thoughts?"
          multiline
          maxRows={50}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          sx={{ width: '100%' }}
          value={comment}
          onChange={handleCommentChange}
        />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          size="small"
          sx={{ color: 'grey' }}
          onClick={() => dispatch(openDrawer())}
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
      </CardActions>
    </Card>
  )
}
