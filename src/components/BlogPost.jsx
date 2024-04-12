import * as React from 'react'
import PropTypes from 'prop-types'
import { Typography, Grid, Divider } from '@mui/material'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import CommentButton from '../pages/Comments/CommentButton'

function BlogPost(props) {
  const { post } = props

  return (
    <Grid
      item
      xs={12}
      md={6}
      py={1}
      marginTop={10}
      marginLeft={5}
      marginRight={5}
    >
      <Grid sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}></Grid>
      <Typography component="h1" variant="h2" marginBottom={2}>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" marginBottom={1}>
        <span style={{ fontStyle: 'italic' }}>{post.date}</span> by{' '}
        <span style={{ fontStyle: 'italic' }}>{post.author}</span>
      </Typography>
      <Typography variant="subtitle1" paragraph>
        {post.description}
      </Typography>
      <Divider /> {/* Added a divider for visual separation */}
      <CommentButton />
      <Divider />
    </Grid>
  )
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPost
