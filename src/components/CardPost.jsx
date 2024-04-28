import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material'
import { PATH } from '../data/paths'

function CardPost(props) {
  const { post } = props
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
              minHeight: '150px',
              maxHeight: '180px',
              width: '100%',
            }}
          >
            <Grid
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Typography variant="subtitle1">{`${post.user.firstname} ${post.user.lastname}`}</Typography>
              <span>⋅</span>
              <Typography variant="subtitle1" color="text.secondary">
                {post.createdAt}
              </Typography>
            </Grid>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.content.length > 400
                ? post.content.substring(0, 400) + '...'
                : post.content}
            </Typography>
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
