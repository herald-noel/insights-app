import Mainlayout from '../../layout/Mainlayout'
import BlogPost from '../../components/BlogPost'
import { Box } from '@mui/material'

const Blog = () => {
  return (
    <Mainlayout>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <BlogPost />
      </Box>
    </Mainlayout>
  )
}

export default Blog
