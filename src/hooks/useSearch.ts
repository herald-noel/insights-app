import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../reducer/store'
import { searchKey } from '../reducer/search/searchSlice'
import { useNavigate } from 'react-router-dom'

const useSearch = () => {
  const dispatch = useDispatch<AppDispatch>()
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  const navigate = useNavigate()

  const setSearch = (keyword: string) => {
    dispatch(searchKey(keyword))
    navigate('/home')
  }

  const getSearch = () => {
    return useAppSelector((state) => state.search.query)
  }

  return { setSearch, getSearch }
}

export default useSearch
