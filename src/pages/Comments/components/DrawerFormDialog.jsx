import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Divider from '@mui/material/Divider'
import CommentBox from './CommentBox'
import { openDrawer } from '../../Comments/DrawerFormDialogSlice'
import Comments from './Comments'

const DrawerFormDialog = () => {
  const isOpen = useSelector((state) => state.DrawerFormDialog.isOpen)

  const dispatch = useDispatch()
  const handleOpenDrawer = () => {
    console.log('Dispatching openDrawer action')
    dispatch(openDrawer())
  }

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleOpenDrawer}>
      <List>
        <ListItem key="comment">
          <CommentBox />
        </ListItem>

        <ListItem>
          <Comments />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default DrawerFormDialog
