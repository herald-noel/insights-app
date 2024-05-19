import PropTypes from 'prop-types'
import {
  Typography,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Button,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import { useEffect, useState } from 'react'
import stringAvatar from '../../../utils/stringAvatar'
import { parseISO, format } from 'date-fns'
import CommentBox from './CommentBox'

export default function Comment(props) {
  const { data } = props

  const [moreAnchorEl, setMoreAnchorEl] = useState(null)
  const [currComment, setCurrComment] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => {
    setCurrComment(data.comment)
  }, [data])

  const isMobileMenuOpen = Boolean(moreAnchorEl)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  const handleCommentChange = (event) => {
    setCurrComment(event.target.value)
  }

  const handleRespond = async () => {}

  const handleEditClick = () => {
    handleMenuClose()
    setIsEdit(true)
  }

  const handleCancelClick = () => {
    setIsEdit(false)
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
      <MenuItem onClick={handleEditClick}>
        <Typography variant="body2">Edit</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body2">Delete</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      {!isEdit ? (
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
                  {...stringAvatar(
                    `${data.user.firstname} ${data.user.lastname}`
                  )}
                />

                <Box marginLeft={'10px'}>
                  <Typography variant="subtitle1">
                    {data.user.firstname} {data.user.lastname}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {format(parseISO(data.createdAt), 'h:mm a MMMM M, yyyy')}
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
              {currComment}
            </Typography>
          </CardContent>

          {renderMenu}
        </Card>
      ) : (
        <CommentBox
          handleCommentChange={handleCommentChange}
          comment={currComment}
          label=""
        >
          <>
            <Button
              size="small"
              sx={{ color: 'grey' }}
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ bgcolor: 'sky-blue', color: 'white' }}
              onClick={handleRespond}
            >
              Update
            </Button>
          </>
        </CommentBox>
      )}
    </>
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
