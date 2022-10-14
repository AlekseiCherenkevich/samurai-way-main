import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    avatarSrc: string,
    deletePost: (id: number) => void,
    id: number,
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    const deletePost = () => {
        props.deletePost(props.id)
    }
    return <div className={classes.post}>
        <div style={{backgroundImage: `${props.avatarSrc}`}} className={classes.avatar}></div>
        <div className={classes.middlePart}>
            <div>{props.message}</div>
            <div>{props.likesCount}</div>
        </div>

        <button onClick={deletePost}>DELETE</button>
    </div>
}

export default Post