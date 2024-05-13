import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Avatar,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CommentNotification = ({ blogTitle, comment }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
      }}
    >
      <Avatar
        sx={{
          width: 48,
          height: 48,
          marginRight: 2,
          bgcolor: 'primary.main',
          color: 'common.white',
        }}
      >
        {`${comment.user.firstname[0]}${comment.user.lastname[0]}`}
      </Avatar>
      <Box flex={1}>
        <Box display="flex" alignItems="center" marginBottom={1}>
          <Typography variant="subtitle1" component="span">
            <Link
              to={`/profile/${comment.user.userId}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {`${comment.user.firstname} ${comment.user.lastname}`}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary" marginLeft={1}>
            commented on your post
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            marginLeft={1}
            fontWeight="bold"
          >
            {blogTitle}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {comment.content}
        </Typography>
      </Box>
    </Card>
  );
};

CommentNotification.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    commentId: PropTypes.number.isRequired,
    user: PropTypes.shape({
      userId: PropTypes.number.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentNotification;