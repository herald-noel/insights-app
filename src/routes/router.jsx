import { BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPageRoutes from './LandingPageRoutes'
import HomeRoutes from './HomeRoutes'
import NotificationRoutes from './NotificationRoutes'
import BlogRoutes from './BlogRoutes'
import CreateBlogRoutes from './CreateBlogRoutes'

const routes = () => {
  return (
    <Router>
      <Routes>
        {LandingPageRoutes}
        {HomeRoutes}
        {NotificationRoutes}
        {BlogRoutes}
        {CreateBlogRoutes}
      </Routes>
    </Router>
  )
}

export default routes
