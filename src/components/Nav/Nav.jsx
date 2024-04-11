import * as React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  Box,
} from '@mui/material/'
import { BRAND_NAME } from '../../data/constants'
import HideOnScroll from './components/HideOnScroll'
import SignInButton from '../../pages/SignIn/SignInButton'
import GetStartedButton from '../../pages/SignUp/GetStartedButton'
import brandLogo from '../../assets/feather.svg'
import SearchAppBar from './components/SearchAppBar'
import { useSelector } from 'react-redux'
import NavItems from './components/NavItems'
import { useNavigate } from 'react-router-dom'

const Nav = (props) => {
  const navigate = useNavigate()

  let isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  const handleLogoClick = () => {
    console.log('Brand clicked') // Add console.log statement
    navigate(isAuthenticated ? '/home' : '/')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component={'nav'}>
          <Container>
            <Toolbar
              sx={{
                padding: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={handleLogoClick}
              >
                <img
                  src={brandLogo}
                  alt="insights logo"
                  width="21px"
                  style={{ marginRight: '7px' }}
                />
                <Typography variant="h6" component="div">
                  {BRAND_NAME}
                </Typography>

                {isAuthenticated && <SearchAppBar />}
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {isAuthenticated ? (
                  <NavItems />
                ) : (
                  <>
                    <SignInButton />
                    <GetStartedButton buttonName="Get Started" />
                  </>
                )}
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
