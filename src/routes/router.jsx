import { BrowserRouter as Router, Routes } from "react-router-dom"
import LandingPageRoutes from "./LandingPageRoutes"
import HomeRoutes from "./HomeRoutes"

const routes = () => {
  return (
    <Router>
      <Routes>
        {LandingPageRoutes}
        {HomeRoutes}
      </Routes>
    </Router>
  )
}

export default routes