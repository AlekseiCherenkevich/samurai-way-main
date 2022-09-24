import classes from './Posts.module.css'
import NewPostContainer from "./NewPost/NewPostContainer";
import Post from "./Post/Post";
import {PostType} from "../../../../redux/profile-reducer";

type PostsPropsType = {
    posts: Array<PostType>
}

function Posts(props: PostsPropsType) {
    debugger
    return <div className={classes.posts}>
        <NewPostContainer/>
        {props.posts.map(p => <Post key={p.id} status={p.status} location={p.location} avatarSrc={p.avatarSrc}/>)}
    </div>
}

export default Posts