import { Box } from '@mui/material'
import Hero from './components/Hero'
import { heroContent } from '../../data/hero.constants'
import Mainlayout from '../../layout/Mainlayout'

const LandingPage = () => {
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Mar 15',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Post title',
      date: 'Mar 15',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'title',
      date: 'Mar 15',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
      title: 'Get title',
      date: 'Mar 15',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
  ]
  return (
    <Mainlayout>
      <Box sx={{ my: 2 }}>
        <Hero post={heroContent} />
      </Box>
    </Mainlayout>
  )
}

export default LandingPage
