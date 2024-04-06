import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Container,
  Slide,
  Button,
  Box,
} from '@mui/material/'
import { Link } from 'react-router-dom'
import { BRAND_LOGO, BRAND_NAME } from '../../data/constants'
import { PATH } from '../../data/paths'
import CustomButton from './components/CustomButton'

const HideOnScroll = (props) => {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Nav = (props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component={'nav'}>
          <Container>
            <Toolbar
              sx={{
                padding: '0px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="div">
                <span style={{ marginRight: '7px' }}>{<BRAND_LOGO />}</span>
                {BRAND_NAME}
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button sx={{ color: '#fff' }}>Sign in</Button>
                <CustomButton buttonName="Get Started" />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  )
}

export default Nav
