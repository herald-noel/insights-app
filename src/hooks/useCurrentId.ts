import { useLocation } from 'react-router-dom'

const useCurrentId = () => {
  const location = useLocation()
  const pathnameParts = location.pathname.split('/')
  const currentId = pathnameParts[pathnameParts.length - 1]

  return { currentId }
}

export default useCurrentId
