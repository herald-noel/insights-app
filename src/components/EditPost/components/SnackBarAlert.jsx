import PropTypes from 'prop-types'
import { Snackbar, Alert } from '@mui/material'
const SnackBarAlert = (props) => {
  const { error, message, handleCloseError } = props
  return (
    <Snackbar
      open={error}
      autoHideDuration={2000}
      onClose={handleCloseError}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

SnackBarAlert.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleCloseError: PropTypes.func.isRequired,
}

export default SnackBarAlert
