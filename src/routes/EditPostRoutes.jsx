import { Route } from 'react-router-dom'
import { PATH } from '../data/paths'
import EditPost from '../components/EditPost/EditPost'

const EditPostRoutes = (
  <Route path={PATH.EDIT_BLOGS} element={<EditPost isNew={false} />} exact />
)

export default EditPostRoutes
