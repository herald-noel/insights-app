import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import CreateBlog from '../pages/CreatePost/CreatePost'

const CreateBlogRoutes = (
  <Route path={PATH.CREATE_BLOG} element={<CreateBlog />} exact />
)

export default CreateBlogRoutes
