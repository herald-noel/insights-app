import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPageRoutes from './LandingPageRoutes'
import HomeRoutes from './HomeRoutes'
import NotificationRoutes from './NotificationRoutes'
import BlogRoutes from './BlogRoutes'
import CreateBlogRoutes from './CreateBlogRoutes'
import PrivateUserRoutes from './PrivateUserRoutes'

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateUserRoutes />}>
          {HomeRoutes}
          {NotificationRoutes}
          {BlogRoutes}
          {CreateBlogRoutes}
        </Route>
        {LandingPageRoutes}
      </Routes>
    </Router>
  )
}

export default routes
