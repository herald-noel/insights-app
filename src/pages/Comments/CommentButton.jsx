import * as React from 'react'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { IconButton, Tooltip } from '@mui/material'

export default function CommentButton() {
  return (
    <React.Fragment>
      <Tooltip title="Respond" placement="top">
        <IconButton label="Comments">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  )
}
