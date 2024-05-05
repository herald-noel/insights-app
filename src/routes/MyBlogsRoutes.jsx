import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import MyBlogs from '../pages/MyBlogs/MyBlogs'

const MyBlogRoutes = (
  <Route path={PATH.USER_BLOGS} element={<MyBlogs />} exact />
)

export default MyBlogRoutes
