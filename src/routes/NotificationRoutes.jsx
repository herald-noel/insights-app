import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import Notification from '../pages/Notifications/Notifications'

const NotificationRoutes = (
  <Route path={PATH.NOTIFICATIONS} element={<Notification />} exact />
)

export default NotificationRoutes
