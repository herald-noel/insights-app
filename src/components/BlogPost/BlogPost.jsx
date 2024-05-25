import {
  Grid,
  Divider,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  CircularProgress,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import '../../styles/reactMarkdown.css'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { REQUEST } from '../../data/requests.constants'
import { useEffect, useRef, useState } from 'react'
import RecommendButton from '../../pages/Blog/components/RecommendButton'
import IconButton from '@mui/material/IconButton'
import MoreIcon from '@mui/icons-material/MoreHoriz'
import useCurrentId from '../../hooks/useCurrentId'
import { useSelector } from 'react-redux'
import { PATH } from '../../data/paths'
import { parseISO, format } from 'date-fns'
import CommentSection from '../../pages/Comments/components/CommentSection'
import stringAvatar from '../../utils/stringAvatar'
import { LoadingButton } from '@mui/lab'
import ConfirmationDialog from './ConfirmationDialog'

function BlogPost() {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate()
  const { currentId } = useCurrentId()
  const ownerId = useRef(null)

  const { data: imageData, fetchData: fetchImageData } = useFetch(
    `images/get/${currentId}`,
    REQUEST.GET
  )

  const { data, fetchData } = useFetch(
    `posts/get/blog/${currentId}`,
    REQUEST.GET
  )

  const { fetchData: deleteBlog } = useFetch(
    `posts/delete/blog/${currentId}`,
    REQUEST.DELETE
  )

  const { fetchData: toggleFollow } = useFetch(
    `follows/toggle/follow/${ownerId.current}`,
    REQUEST.POST
  )

  const {
    loading: followLoading,
    data: isUserFollowing,
    fetchData: checkIfUserFollow,
  } = useFetch(`follows/following/${ownerId.current}`, REQUEST.GET)

  const [responseData, setResponseData] = useState({})
  const [likes, setLikes] = useState(0)

  const [imageURL, setImageURL] = useState('')
  const [isImageLoading, setIsImageLoading] = useState(true)
  const [moreAnchorEl, setMoreAnchorEl] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleMenuOpen = (event) => {
    setMoreAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMoreAnchorEl(null)
  }

  const isMenuOpen = Boolean(moreAnchorEl)

  //confirmation dialog
  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  const handleDeleteConfirm = async () => {
    await deleteBlog()
    navigate(PATH.HOME, { state: { refresh: true } })
    handleDialogClose()
  }

  useEffect(() => {
    fetchData()
    fetchImageData()
  }, [fetchData, fetchImageData])

  useEffect(() => {
    if (data !== null) {
      ownerId.current = data.user.userId
      setLikes(data.likes)
      setResponseData(data)
    }
  }, [data])

  useEffect(() => {
    if (ownerId.current) {
      checkIfUserFollow()
    }
  }, [ownerId, checkIfUserFollow])

  useEffect(() => {
    if (imageData !== null && imageData.length > 0) {
      setImageURL(imageData[0].imageURL)
    }
  }, [imageData])

  const handleClickEdit = () => {
    navigate(`/edit/${currentId}`)
  }

  const handleClickDelete = () => {
    handleDialogOpen()
  }

  const handleFollowClick = async () => {
    await toggleFollow()
    await checkIfUserFollow()
  }

  const handleImageLoad = () => {
    setIsImageLoading(false)
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
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleClickEdit}>
        <Typography variant="body2">Edit</Typography>
      </MenuItem>
      <MenuItem onClick={handleClickDelete}>
        <Typography variant="body2">Delete</Typography>
      </MenuItem>
    </Menu>
  )

  return (
    <Grid
      item
      xs={12}
      md={6}
      py={1}
      width={'800px'}
      maxWidth={'800px'}
      minWidth={'100px'}
    >
      {responseData && (
        <>
          <h1 style={{ fontSize: '42px' }}>{responseData.title}</h1>
          {responseData.user && (
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box display={'flex'} alignItems={'center'}>
                <Avatar
                  {...stringAvatar(
                    `${responseData.user.firstname} ${responseData.user.lastname}`
                  )}
                />

                <Box sx={{ marginY: '20px', marginLeft: '10px' }}>
                  <p style={{ fontSize: '16px' }}>
                    {`${responseData.user.firstname} ${responseData.user.lastname}`}
                    <span> ⋅ </span>
                    <LoadingButton
                      size="small"
                      onClick={handleFollowClick}
                      loading={followLoading}
                      disabled={followLoading}
                    >
                      {isUserFollowing ? 'Following' : 'Follow'}
                    </LoadingButton>
                  </p>
                  <p style={{ fontSize: '14px', color: 'grey' }}>
                    {format(
                      parseISO(responseData.createdAt),
                      'h:mm a MMMM M, yyyy'
                    )}
                  </p>
                </Box>
              </Box>

              {user.userId === ownerId.current && (
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
              )}
            </Box>
          )}
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box marginY={'1px'} display={'flex'}>
              <RecommendButton likes={likes} blogId={currentId} />
              {/* <CommentButton /> */}
            </Box>
          </Box>
          <Divider />
          {imageURL && (
            <Box
              sx={{
                marginTop: '2rem',
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
              }}
            >
              {isImageLoading && <CircularProgress />}
              <img
                src={imageURL}
                alt="Blog"
                style={{
                  display: isImageLoading ? 'none' : 'block',
                  width: '500px',
                  height: '500px',
                  objectFit: 'cover',
                }}
                onLoad={handleImageLoad}
              />
            </Box>
          )}
          <Box marginTop={'20px'}>
            <ReactMarkdown
              className="blog-line-break"
              rehypePlugins={[rehypeRaw]}
            >
              {responseData.content}
            </ReactMarkdown>
          </Box>
        </>
      )}
      {renderMenu}
      <ConfirmationDialog
        open={dialogOpen}
        handleClose={handleDialogClose}
        handleConfirm={handleDeleteConfirm}
      />
      <Box id="comment-section" sx={{ marginTop: '100px' }}>
        <CommentSection />
      </Box>
    </Grid>
  )
}

export default BlogPost
