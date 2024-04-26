import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button, Box } from '@mui/material'

const NewPostButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant="outlined" startIcon={<AddIcon />}>
        Add Post
      </Button>
    </Box>
  )
}

export default NewPostButton
