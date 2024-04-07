import PropTypes from 'prop-types'
import Nav from '../components/Nav/Nav'
import { Container, Box } from '@mui/material'

const Mainlayout = (props) => {
  const { children } = props
  return (
    <>
      <Nav />
      <Container>
        <Box sx={{ my: 2 }}>{children}</Box>
      </Container>
    </>
  )
}

export default Mainlayout

Mainlayout.propTypes = {
  children: PropTypes.object.isRequired,
}
