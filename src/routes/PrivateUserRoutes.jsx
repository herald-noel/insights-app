import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateUserRoutes = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated)
  return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default PrivateUserRoutes
