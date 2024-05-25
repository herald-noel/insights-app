import { Box } from '@mui/material'
import NotificationCard from './NotficationCard'
import useFetch from '../../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { REQUEST } from '../../../data/requests.constants'
const NotificationTabs = () => {
  const [responseData, setResponseData] = useState([])
  const url = '/notifications/all'

  const { data, fetchData } = useFetch(url, REQUEST.GET)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setResponseData(data)
  }, [data])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ p: 3 }}>
        <NotificationCard notifData={responseData} />
      </Box>
    </Box>
  )
}

export default NotificationTabs
