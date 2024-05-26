import PropTypes from 'prop-types'
import { Box, Card, CardContent, Avatar, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import stringAvatar from '../../../utils/stringAvatar'
import { notificationType } from '../../../data/notificationType.constants'

const NotificationCard = ({ notifData }) => {
  const getNotificationMessage = (notif) => {
    console.log(notif)
    switch (notif) {
      case notificationType.COMMENT_POST:
        return 'commented on your blog'
      case notificationType.BLOG_POST:
        return 'created a new post'
      case notificationType.LIKE_POST:
        return 'liked your post'
      case notificationType.FOLLOW_USER:
        return 'followed you.'
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      {notifData &&
        notifData.map((notif, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <Link
              to={notif.blogId && `/blog/${notif.blogId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar
                      {...stringAvatar(
                        `${notif.author.firstname} ${notif.author.lastname}`
                      )}
                    />
                  </Grid>
                  <Grid item xs>
                    <Box display="flex" alignItems="center" mb={1}>
                      <Typography variant="subtitle1" component="span">
                        {`${notif.author.firstname} ${notif.author.lastname}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" ml={1}>
                        {getNotificationMessage(notif.notificationType)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        ml={1}
                        fontWeight="bold"
                      >
                        {notif.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {`Published on ${format(new Date(notif.createdAt), 'MMMM d, yyyy')}`}
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
  notifData: PropTypes.arrayOf(
    PropTypes.shape({
      blogId: PropTypes.number,
      title: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      notificationType: PropTypes.string.isRequired,
      author: PropTypes.shape({
        userId: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
      }).isRequired,
    })
  ),
}

export default NotificationCard
