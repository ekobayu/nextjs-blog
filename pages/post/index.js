import AllPost from "../../component/post/all-post";
import { getAllPost } from "../../lib/post-util";


export default function AllPostPage(props) {
    return <AllPost posts={props.posts}/>
}

export function getStaticProps() {
  const allPost = getAllPost()

  return {
    props: {
      posts: allPost
    }
  }
}
  