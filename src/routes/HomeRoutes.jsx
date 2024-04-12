import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import Home from '../pages/Home/Home'

const HomeRoutes = <Route path={PATH.HOME} element={<Home />} exact />

export default HomeRoutes
