import * as React from 'react'
import PropTypes from 'prop-types'

import { ThumbUpOffAltOutlined } from '@mui/icons-material'

import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import useLike from '../../../components/BlogPost/hooks/useLike'

export default function RecommendButton(props) {
  const { likes, blogId } = props
  const { toggleLike } = useLike(blogId)

  return (
    <React.Fragment>
      <Box display={'flex'} alignItems={'center'}>
        <Tooltip title="Recommend" placement="top">
          <IconButton label="Recommend" onClick={toggleLike}>
            <ThumbUpOffAltOutlined />
          </IconButton>
        </Tooltip>
        <Typography marginRight={'5px'}>{likes}</Typography>
      </Box>
    </React.Fragment>
  )
}

RecommendButton.propTypes = {
  likes: PropTypes.number.isRequired,
  blogId: PropTypes.string.isRequired,
}
