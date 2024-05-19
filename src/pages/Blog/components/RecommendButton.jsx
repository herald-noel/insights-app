import * as React from 'react'
import PropTypes from 'prop-types'

import { ThumbUpOffAltOutlined } from '@mui/icons-material'

import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import useLike from '../../../components/BlogPost/hooks/useLike'
import { useState, useEffect } from 'react'

export default function RecommendButton(props) {
  const { likes, blogId } = props
  const { toggleLike, numLikes, isUserLike } = useLike(blogId)
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    setLikeCount(likes)
  }, [likes])

  useEffect(() => {
    setLikeCount(numLikes)
  }, [numLikes])

  return (
    <React.Fragment>
      <Box display={'flex'} alignItems={'center'}>
        <Tooltip title="Recommend" placement="top">
          <IconButton label="Recommend" onClick={toggleLike}>
            <ThumbUpOffAltOutlined color={isUserLike ? 'primary' : 'inherit'} />
          </IconButton>
        </Tooltip>
        <Typography marginRight={'5px'}>{likeCount}</Typography>
      </Box>
    </React.Fragment>
  )
}

RecommendButton.propTypes = {
  likes: PropTypes.number.isRequired,
  blogId: PropTypes.string.isRequired,
}
