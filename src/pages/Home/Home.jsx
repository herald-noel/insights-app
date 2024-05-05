import BlogCards from '../../components/BlogCards/BlogCards'
import Mainlayout from '../../layout/Mainlayout'

const Home = () => {
  const url = '/posts/all'

  return (
    <Mainlayout>
      <BlogCards url={url} isNewPostBtn={true} />
    </Mainlayout>
  )
}

export default Home
