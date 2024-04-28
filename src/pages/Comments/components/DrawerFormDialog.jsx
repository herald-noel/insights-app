import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useSelector, useDispatch } from 'react-redux'
import CommentBox from './CommentBox'
import { openDrawer } from '../../Comments/DrawerFormDialogSlice'
import Comments from './Comments'

const DrawerFormDialog = () => {
  const isOpen = useSelector((state) => state.DrawerFormDialog.isOpen)

  const dispatch = useDispatch()
  const handleOpenDrawer = () => {
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
