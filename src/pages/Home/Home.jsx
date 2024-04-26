import Mainlayout from '../../layout/Mainlayout'
import { Box } from '@mui/material'
import CardPost from '../../components/CardPost'
import CreateBlogButton from './components/CreateBlogButton'

const Home = () => {
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
      <Box>
        <>
          <CreateBlogButton />
          {featuredPosts.map((post) => (
            <CardPost key={post.title} post={post} />
          ))}
        </>
      </Box>
    </Mainlayout>
  )
}

export default Home
