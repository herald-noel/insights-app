import { BrowserRouter as Router } from "react-router-dom"
import HomeRoutes from "./HomeRoutes"


const routes = () => {
  return (
    <Router>
      <HomeRoutes />
    </Router>
  )
}

export default routes