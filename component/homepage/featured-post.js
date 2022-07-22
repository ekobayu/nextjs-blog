import classes from '../homepage/featured-post.module.css'
import PostGrid from '../post/post-grid'

export default function FeaturedPost(props) {
    console.log("🚀 ~ file: featured-post.js ~ line 5 ~ FeaturedPost ~ props", props)
    return <section className={classes.latest}>
        <h2>Latest Post</h2>
        <PostGrid posts={props.posts} />
    </section>
}