import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

export default function CommentBox() {
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
          variant="standard" // Use standard variant
          InputProps={{ disableUnderline: true }} // Disable the underline
          sx={{ width: '100%' }} // Set width to 100%
        />
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'grey' }}>
          Cancel
        </Button>{' '}
        {/* Set color to grey */}
        <Button
          size="small"
          variant="contained"
          sx={{ bgcolor: 'sky-blue', color: 'white' }}
        >
          Respond
        </Button>
      </CardActions>
    </Card>
  )
}
