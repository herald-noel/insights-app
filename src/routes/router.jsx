import { BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPageRoutes from './LandingPageRoutes'
import HomeRoutes from './HomeRoutes'
import NotificationRoutes from './NotificationRoutes'

const routes = () => {
  return (
    <Router>
      <Routes>
        {LandingPageRoutes}
        {HomeRoutes}
        {NotificationRoutes}
      </Routes>
    </Router>
  )
}

export default routes
