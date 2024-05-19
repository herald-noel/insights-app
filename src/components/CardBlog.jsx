import PropTypes from 'prop-types'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import stringAvatar from '../utils/stringAvatar'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Chip,
  Box,
} from '@mui/material'
import { PATH } from '../data/paths'

const CardBlog = ({ post }) => {
  const postData = post
  const coverImage = 'https://via.placeholder.com/300x200?text=Cover+Image'
  return (
    <Card
      component={Link}
      to={`${PATH.BLOG}/${postData.blogId}`}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={coverImage}
        alt={postData.title}
        sx={{ maxWidth: { xs: '100%', md: '300px' } }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              marginBottom: '10px',
            }}
          >
            <Avatar
              {...stringAvatar(
                `${postData.user.firstname} ${postData.user.lastname}`
              )}
            />
            <Typography variant="subtitle1">
              {`${postData.user.firstname} ${postData.user.lastname}`}
            </Typography>
            <Chip
              size="small"
              label={format(parseISO(postData.createdAt), 'MMMM M, yyyy')}
              sx={{ color: '#2979ff' }}
            />
          </Box>
          <Typography component="span" variant="h5" gutterBottom>
            {postData.title}
          </Typography>
          <Typography component="span" variant="body2" color="text.secondary">
            <ReactMarkdown className="line-break" rehypePlugins={[rehypeRaw]}>
              {postData.content}
            </ReactMarkdown>
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

CardBlog.propTypes = {
  post: PropTypes.shape({
    blogId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      userId: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default CardBlog
