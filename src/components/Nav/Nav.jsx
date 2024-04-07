import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Box,
} from '@mui/material/'
import { BRAND_LOGO, BRAND_NAME } from '../../data/constants'
import HideOnScroll from './components/HideOnScroll'
import SignInButton from '../../pages/SignIn/SignInButton'
import GetStartedButton from '../../pages/SignUp/GetStartedButton'

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
                <SignInButton />
                <GetStartedButton buttonName="Get Started" />
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
