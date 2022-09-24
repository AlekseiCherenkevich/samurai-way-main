import classes from './Posts.module.css'
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";



function Posts() {
    return <div className={classes.posts}>
        <NewPost/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}

export default Posts