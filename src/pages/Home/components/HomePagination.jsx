import PropTypes from 'prop-types'
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { clickPage } from '../homePageSlice'

const HomePagination = (props) => {
  const { length } = props

  // const dispatch = useDispatch()
  const page = useSelector((state) => state.homePage.page)

  return (
    <Pagination
      page={page}
      count={length}
      shape="rounded"
      size="large"
      // onChange={dispatch(clickPage(5))}
    />
  )
}

HomePagination.propTypes = {
  length: PropTypes.number.isRequired,
}

export default HomePagination
