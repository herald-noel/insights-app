import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../reducer/store'
import { searchKey } from '../reducer/search/searchSlice'
import { useState } from 'react'

const useSearch = () => {
  const [current, setCurrent] = useState<string>(''); 
  const dispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const setSearch = (keyword: string) => {
    dispatch(searchKey(keyword));
    setCurrent(keyword); 
  };

  const getSearch = () => {
    const keyword = useAppSelector((state) => state.search.query);
    setCurrent(keyword); 
    return keyword; 
  };

  return { current, setSearch, getSearch };
};

export default useSearch;
