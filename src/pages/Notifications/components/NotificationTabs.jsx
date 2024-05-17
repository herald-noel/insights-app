import { useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import NotificationCards from './NotificationCards'
import NotificationComments from './NotficationComments'

const NotificationTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const url = '/posts/all'

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
          <Tab label="Posts" />
          <Tab label="Responses" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Typography component="span" variant="body1">
            <NotificationCards url={url} />
          </Typography>
        )}
        {value === 1 && (
          <Typography component="span" variant="body1">
            <NotificationComments
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
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default NotificationTabs
