import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useSelector, useDispatch } from 'react-redux'
import CommentBox from './CommentBox'
import { openDrawer } from '../../Comments/DrawerFormDialogSlice'
import Comment from './Comment'
import useFetch from '../../../hooks/useFetch'
import { REQUEST } from '../../../data/requests.constants'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { setComments } from '../commentsDataSlice'

const DrawerFormDialog = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.commentsData.comments)
  const pathnameParts = location.pathname.split('/')
  const blogId = pathnameParts[pathnameParts.length - 1]

  const url = `/comments/all`
  const { data, fetchData } = useFetch(url, REQUEST.GET, { blogId: blogId })

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (data !== null) {
      dispatch(setComments(data))
    }
  }, [data])

  const isOpen = useSelector((state) => state.DrawerFormDialog.isOpen)

  const handleOpenDrawer = () => {
    dispatch(openDrawer())
  }

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleOpenDrawer}>
      <List>
        <ListItem key="comment">
          <CommentBox />
        </ListItem>

        {comments.map((data, index) => (
          <ListItem key={index}>
            <Comment data={data} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default DrawerFormDialog
