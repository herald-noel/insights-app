import { Box, Typography } from '@mui/material'
import NotificationTabs from './NotificationTabs'

const NotificationBody = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{marginBottom: 4}}>
        <Typography variant="h4" gutterBottom>
          Notifications
        </Typography>
        <Typography variant="body1" gutterBottom>
          What&apos;s New
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The latest releases from publishers you follow.
        </Typography>
      </Box>
      <NotificationTabs/>
    </Box>
  )
}

export default NotificationBody
