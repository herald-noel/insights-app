import * as React from 'react'
import PropTypes from 'prop-types'

import { ThumbUpOffAltOutlined } from '@mui/icons-material'

import { Box, IconButton, Tooltip, Typography } from '@mui/material'

export default function RecommendButton(props) {
  const { likes } = props
  return (
    <React.Fragment>
      <Box display={'flex'} alignItems={'center'}>
        <Tooltip title="Recommend" placement="top">
          <IconButton label="Recommend">
            <ThumbUpOffAltOutlined />{' '}
          </IconButton>
        </Tooltip>
        <Typography marginRight={'5px'}>{likes}</Typography>
      </Box>
    </React.Fragment>
  )
}

RecommendButton.propTypes = {
  likes: PropTypes.number.isRequired,
}
