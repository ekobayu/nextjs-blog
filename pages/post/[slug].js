import PostContent from "../../component/post/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";


export default function PostDetailPage(props) {
    return <PostContent post={props.post}/>
}

export async function getStaticProps(context) {
    const { params } = context
    const { slug } = params
    console.log("🚀 ~ file: [slug].js ~ line 12 ~ getStaticProps ~ slug", slug)

    const postData = await getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 60
    }
}

export function getStaticPaths() {
    const postFilenames = getPostFiles()

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''))

    return {
      paths: slugs.map((slug) => ({ params: { slug: slug } })),
      fallback: false,
    }
}
