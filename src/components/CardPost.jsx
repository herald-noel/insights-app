import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/reactMarkdown.css'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
} from '@mui/material'
import { PATH } from '../data/paths'
import useSearch from '../hooks/useSearch'
import { useEffect } from 'react'
import { parseISO, format } from 'date-fns';

function CardPost(props) {
  const { post } = props

  useEffect(() => {
    setSearch('');
  }, [])

  const { setSearch } = useSearch();

  return (
    <Grid item xs={12} md={6} py={1}>
      <CardActionArea component={Link} to={`${PATH.BLOG}/${post.blogId}`}>
        <Card
          sx={{
            display: 'flex',
            textAlign: 'left',
          }}
          variant="outlined"
        >
          <CardContent
            sx={{
              flex: 1,
              minHeight: '200px',
              maxHeight: '200px',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '10px',
              }}
            >
              <Avatar sx={{ width: 30, height: 30 }}>
                {post.user.firstname[0]}
                {post.user.lastname[0]}
              </Avatar>
              <Typography variant="subtitle1">{`${post.user.firstname} ${post.user.lastname}`}</Typography>
              <span>⋅</span>
              <Typography variant="subtitle1" color="text.secondary">
                {format(parseISO(post.createdAt), 'MMMM M, yyyy')}
              </Typography>
            </Grid>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <ReactMarkdown className="line-break" rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

CardPost.propTypes = {
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

export default CardPost
