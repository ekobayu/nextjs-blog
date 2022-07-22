import PostGrid from "./post-grid"
import classes from './all-post.module.css'

export default function AllPost(props) {
    return <section className={classes.posts}>
        <h1>All Post</h1>
        <PostGrid posts={props.posts}/>
    </section>
}
