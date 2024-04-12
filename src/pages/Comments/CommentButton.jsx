import * as React from 'react'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import CommentBox from './../Comments/components/CommentBox'
import Comments from './components/Comments'
import Divider from '@mui/material/Divider'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import RestoreIcon from '@mui/icons-material/Restore'
import Box from '@mui/material/Box'

export default function CommentButton() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: 69 }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="Comments"
          icon={<ChatOutlinedIcon />}
          onClick={toggleDrawer}
        />
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem key="comment2">
              <CommentBox />
            </ListItem>
            <Divider />
            <ListItem>
              <Comments />
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </BottomNavigation>
    </Box>
  )
}
