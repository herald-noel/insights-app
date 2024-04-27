import PropTypes from 'prop-types'
import { Grid, Divider, Box } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import CommentButton from '../pages/Comments/CommentButton'
import '../styles/reactMarkdown.css'

function BlogPost(props) {
  const { post } = props

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
      <Grid sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}></Grid>
      <h1 style={{ fontSize: '42px' }}>{post.title}</h1>
      <Box sx={{ marginY: '20px' }}>
        <p style={{ fontSize: '16px' }}>{post.author}</p>
        <p style={{ fontSize: '14px', color: 'grey' }}>{post.date}</p>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box marginY={'1px'}>
          <CommentButton />
        </Box>
      </Box>
      <Divider />
      <Box marginTop={'20px'}>
        <ReactMarkdown className="line-break" rehypePlugins={[rehypeRaw]}>
          {post.description}
        </ReactMarkdown>
      </Box>
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
