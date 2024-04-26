import PropTypes from 'prop-types'
import { Typography, Grid } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

function BlogPost(props) {
  const { post } = props

  return (
    <Grid item xs={12} md={6} py={1} marginLeft={5} marginRight={5}>
      <Grid sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}></Grid>
      <Typography component="h1" variant="h2" marginBottom={2}>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" marginBottom={1}>
        <span>{post.date}</span> by <span>{post.author}</span>
      </Typography>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {post.description}
      </ReactMarkdown>

      {/* <CommentButton /> */}
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
