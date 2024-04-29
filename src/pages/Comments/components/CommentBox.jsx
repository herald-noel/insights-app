import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'

export default function CommentBox(props) {
  const { children, handleCommentChange, comment } = props

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
        {children}
      </CardActions>
    </Card>
  )
}

CommentBox.propTypes = {
  children: PropTypes.object.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
}
