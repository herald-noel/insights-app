import PropTypes from 'prop-types'
import {
  Typography,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import { useState } from 'react'
import stringAvatar from '../../../utils/stringAvatar'

export default function Comment(props) {
  const { data } = props
  const [moreAnchorEl, setMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Typography variant="body2">Edit</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2">Delete</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <Card
      sx={{
        width: '100%',
        border: 'none', // Remove the border
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: {
              xs: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            },
          }}
        >
          <Box display={'flex'} alignItems={'center'}>
            <Avatar
              {...stringAvatar(`${data.user.firstname} ${data.user.lastname}`)}
            />

            <Box marginLeft={'10px'}>
              <Typography variant="subtitle1">
                {data.user.firstname} {data.user.lastname}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {data.createdAt}
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ wordBreak: 'break-word' }}
        >
          {data.comment}
        </Typography>
      </CardContent>

      {renderMenu}
    </Card>
  )
}

Comment.propTypes = {
  data: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  }).isRequired,
}
