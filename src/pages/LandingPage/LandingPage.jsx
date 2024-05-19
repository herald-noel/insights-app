import { Box } from '@mui/material'
import Hero from './components/Hero'
import { heroContent } from '../../data/hero.constants'
import Mainlayout from '../../layout/Mainlayout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const LandingPage = () => {
  const navigate = useNavigate()
  const userEmail = useSelector((state) => state.user.user)

  useEffect(() => {
    if (userEmail !== null) {
      navigate('/home')
    }
  }, [userEmail, navigate])
  return (
    <Mainlayout>
      <Box sx={{ my: 2 }}>
        <Hero post={heroContent} />
      </Box>
    </Mainlayout>
  )
}

export default LandingPage
