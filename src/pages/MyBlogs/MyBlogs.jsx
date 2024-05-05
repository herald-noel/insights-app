import Mainlayout from '../../layout/Mainlayout'
import BlogCards from '../../components/BlogCards/BlogCards'

const MyBlogs = () => {
  const url = '/posts/get/blog/user'
  return (
    <Mainlayout>
      <BlogCards url={url} isNewPostBtn={false} />
    </Mainlayout>
  )
}

export default MyBlogs
