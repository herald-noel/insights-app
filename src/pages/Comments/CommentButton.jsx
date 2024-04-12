import * as React from 'react'

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { useDispatch } from 'react-redux'

import DrawerFormDialog from '../Comments/components/DrawerFormDialog'
import { openDrawer } from './DrawerFormDialogSlice'

export default function CommentButton() {
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <BottomNavigationAction
        label="Comments"
        onClick={() => dispatch(openDrawer())}
        icon={<ChatOutlinedIcon />}
      ></BottomNavigationAction>

      <DrawerFormDialog />
    </React.Fragment>
  )
}
