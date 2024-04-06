import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PATH } from '../../../data/paths'

const GetStartedButton = ({ buttonName }) => {
  return (
    <Button
      component={Link}
      to={PATH.SIGN_UP}
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

export default GetStartedButton

GetStartedButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
}
