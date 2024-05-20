import { Box, Divider, Typography, Grid } from '@mui/material'
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
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Notifications
            </Typography>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} md={6} sx={{ mt: 1 }}>
              <Typography variant="body1" gutterBottom>
                What&apos;s New
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The latest releases from publishers you follow.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              sx={{ mt: 1 }}
            >
            </Grid>
          </Grid>
        </Grid>
      <Divider sx={{my: 2}} />
      <NotificationTabs />
    </Box>
  )
}

export default NotificationBody
