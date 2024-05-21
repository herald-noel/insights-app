import PropTypes from 'prop-types'
import { Box, Card, CardContent, Avatar, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import stringAvatar from '../../../utils/stringAvatar'

const NotificationCard = ({ blogData }) => {
  return (
    <Box sx={{ width: '100%' }}>
  {blogData &&
    blogData.map((blog) => (
      <Card key={blog.blogId} sx={{ mb: 2 }}>
        <Link
          to={`/blog/${blog.blogId}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar
                  {...stringAvatar(`${blog.author.firstname} ${blog.author.lastname}`)}
                />
              </Grid>
              <Grid item xs>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography variant="subtitle1" component="span">
                    {`${blog.author.firstname} ${blog.author.lastname}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" ml={1}>
                    created a new post
                  </Typography>
                  <Typography variant="body2" color="text.primary" ml={1} fontWeight="bold">
                    {blog.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {`Published on ${format(new Date(blog.createdAt), 'MMMM d, yyyy')}`}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Link>
      </Card>
    ))}
</Box>
  )
}

NotificationCard.propTypes = {
  blogData: PropTypes.arrayOf(
    PropTypes.shape({
      blogId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      author: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
}

export default NotificationCard
