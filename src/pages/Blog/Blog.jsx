import Mainlayout from '../../layout/Mainlayout'
import BlogPost from '../../components/BlogPost'
import CommentButton from '../Comments/CommentButton'

const Blog = () => {
  const sampleBlog = [
    {
      title: 'Sample blog post',
      author: 'John Doe',
      date: 'Mar 15, 2024',
      description: `
  This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported.
  You can extend these by modifying Markdown.js.

  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

  Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
  This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported.
  You can extend these by modifying Markdown.js.

  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

  Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.

  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
  This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported.
  You can extend these by modifying Markdown.js.
    
    `,
    },
  ]

  return (
    <Mainlayout>
      <div>
        {sampleBlog.map((post) => (
          <BlogPost key={post.title} post={post} />
        ))}
        <CommentButton />
      </div>
    </Mainlayout>
  )
}

export default Blog
