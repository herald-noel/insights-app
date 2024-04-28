import React from 'react'
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

export default function Comments() {
  const [moreAnchorEl, setMoreAnchorEl] = React.useState(null)

  const mobileMenuId = 'primary-search-account-menu-mobile'

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
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Typography variant="body2">Edit Comment</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2">Delete</Typography>
      </MenuItem>
    </Menu>
  )
  return (
    <Card
      sx={{
        maxWidth: 400,
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
            <Avatar>J</Avatar>
            <Box marginLeft={'10px'}>
              <Typography variant="subtitle1">John Doe </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                March 15, 2024
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body2" color="text.primary">
          Anyone with a head on your sholders should avoid this kind of foolery
          at any cost. I bet your bottom dollar that 3 out of the 6 minimum of
          these "passive income" streams are used to password spray, ddos, tor
          traffic and more.
        </Typography>
      </CardContent>

      {renderMenu}
    </Card>
  )
}
