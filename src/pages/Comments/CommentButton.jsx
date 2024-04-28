import * as React from 'react'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

import { IconButton, Tooltip } from '@mui/material'
import { useDispatch } from 'react-redux'

import DrawerFormDialog from '../Comments/components/DrawerFormDialog'
import { openDrawer } from './DrawerFormDialogSlice'

export default function CommentButton() {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Tooltip title="Respond" placement="top">
        <IconButton label="Comments" onClick={() => dispatch(openDrawer())}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Tooltip>

      <DrawerFormDialog />
    </React.Fragment>
  )
}
