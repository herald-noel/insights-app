import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import { PATH } from "../data/paths"

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
    </Routes>
  )
}

export default HomeRoutes