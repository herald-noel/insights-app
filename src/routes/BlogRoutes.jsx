import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import Blog from '../pages/Blog/Blog'

const BlogRoutes = <Route path={PATH.BLOG} element={<Blog />} exact />

export default BlogRoutes
