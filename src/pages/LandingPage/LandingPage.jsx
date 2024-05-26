import Hero from './components/Hero'
import { heroContent } from '../../data/hero.constants'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'

const LandingPage = () => {
  const navigate = useNavigate()
  const userEmail = useSelector((state) => state.user.user)

  useEffect(() => {
    if (userEmail !== null) {
      navigate('/home')
    }
  }, [userEmail, navigate])
  return (
    <>
      <Nav />
      <Hero post={heroContent} />
    </>
  )
}

export default LandingPage
