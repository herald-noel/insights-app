import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { PATH } from '../../../data/paths'

const CreateBlogButton = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        to={`${PATH.CREATE_BLOG}`}
        component={Link}
        variant="outlined"
        startIcon={<AddIcon />}
      >
        New Post
      </Button>
    </Box>
  )
}

export default CreateBlogButton
