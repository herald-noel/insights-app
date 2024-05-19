import { Box } from '@mui/material'
import NotificationCard from './NotficationCard'

const NotificationTabs = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ p: 3 }}>
        <NotificationCard
          blogTitle="My Awesome Blog Post"
          comment={{
            commentId: 1,
            user: {
              userId: 1,
              firstname: 'John',
              lastname: 'Doe',
            },
            content: 'This is a great post! Keep up the good work.',
            createdAt: '2023-05-12T10:30:00.000Z',
          }}
        />
        <NotificationCard
          blogTitle="My Awesome Blog Post"
          comment={{
            commentId: 1,
            user: {
              userId: 1,
              firstname: 'John',
              lastname: 'Doe',
            },
            content: 'This is a great post! Keep up the good work.',
            createdAt: '2023-05-12T10:30:00.000Z',
          }}
        />
      </Box>
    </Box>
  )
}

export default NotificationTabs
