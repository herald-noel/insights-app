import Nav from '../../components/Nav/Nav'
import { Container, Box } from '@mui/material'
import CardPost from '../../components/CardPost'
import Hero from './components/Hero'
import { heroContent } from '../../data/hero.constants'

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
    <>
      <Nav />
      <Container>
        <Box sx={{ my: 2 }}>
          <Hero post={heroContent} />
          {featuredPosts.map((post) => (
            <CardPost key={post.title} post={post} />
          ))}
        </Box>
      </Container>
    </>
  )
}

export default LandingPage
