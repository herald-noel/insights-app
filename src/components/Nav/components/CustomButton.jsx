import { Button } from '@mui/material'
import PropTypes from 'prop-types'

const CustomButton = ({ buttonName }) => {
  return (
    <Button
      variant="contained"
      size="small"
      sx={{
        marginLeft: '10px',
        backgroundColor: '#fff',
        color: '#000',
        paddingX: '18px',
        borderRadius: '50px',
        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
      }}
    >
      {buttonName}
    </Button>
  )
}

export default CustomButton

CustomButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
}
