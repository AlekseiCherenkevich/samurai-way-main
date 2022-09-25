import classes from './Posts.module.css'
import NewPostContainer from "./NewPost/NewPostContainer";
import Post from "./Post/Post";
import {PostType} from "../../../../redux/profile-reducer";

type PostsPropsType = {
    posts: Array<PostType>,
    deletePost: (id: number) => void
}

function Posts(props: PostsPropsType) {
    return <div className={classes.posts}>
        <NewPostContainer/>
        {props.posts.map(p => <Post deletePost={props.deletePost} id={p.id} key={p.id} message={p.message} avatarSrc={p.avatarSrc}/>)}
    </div>
}

export default Posts