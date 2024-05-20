import { Box, Divider, Typography } from '@mui/material'
import NotificationTabs from './NotificationTabs'
import useFetch from '../../../hooks/useFetch'
import { useEffect } from 'react'
import { REQUEST } from '../../../data/requests.constants'

const NotificationBody = () => {

  const url = 'notifications/read'

  const {fetchData} = useFetch(url, REQUEST.GET)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ marginBottom: 4 }}>
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
      <Divider />
      <NotificationTabs />
    </Box>
  )
}

export default NotificationBody
