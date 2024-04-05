import { Route } from "react-router-dom"
import { PATH } from "../data/paths"
import LandingPage from "../pages/LandingPage/LandingPage"

const LandingPageRoutes = (
  <Route path={PATH.LANDING_PAGE} element={<LandingPage />} exact />
)

export default LandingPageRoutes;