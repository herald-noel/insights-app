import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Chip,
  Box,
} from '@mui/material';
import { PATH } from '../data/paths';

const NotificationPost = ({ post }) => {
  // Dummy value for the post prop
  const dummyPost = {
    blogId: '1234567890',
    coverImage: 'https://via.placeholder.com/300x200?text=Cover+Image',
    title: 'Blog Post Title',
    content: 'This is a dummy content for the blog post. It demonstrates how the post card will look like with the provided information.',
    user: {
      firstname: 'John',
      lastname: 'Doe',
    },
    createdAt: '2023-05-10T12:00:00.000Z',
  };

  // Use the dummy value if no post prop is provided
  const postData = post || dummyPost;

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
        image={dummyPost.coverImage}
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
              sx={{
                width: 30,
                height: 30,
                bgcolor: 'primary.main',
                color: 'common.white',
              }}
            >
              {`${postData.user.firstname[0]}${postData.user.lastname[0]}`}
            </Avatar>
            <Typography variant="subtitle1">
              {`${postData.user.firstname} ${postData.user.lastname}`}
            </Typography>
            <Chip
              size="small"
              label={format(parseISO(postData.createdAt), 'MMMM M, yyyy')}
              color="secondary"
            />
          </Box>
          <Typography component="h2" variant="h5" gutterBottom>
            {postData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postData.content.slice(0, 150)}...
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default NotificationPost;