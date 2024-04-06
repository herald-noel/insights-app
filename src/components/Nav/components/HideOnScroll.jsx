import PropTypes from 'prop-types'
import { Slide, useScrollTrigger } from '@mui/material'

const HideOnScroll = (props) => {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
}
