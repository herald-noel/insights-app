import { Box, Typography, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        component={Link}
        to={isAuthenticated ? '/home' : '/'}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Go to Home
      </Button>
    </Box>
  )
}

export default NotFound
