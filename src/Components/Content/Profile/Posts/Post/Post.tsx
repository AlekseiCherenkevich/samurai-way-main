import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    avatarSrc: string,
    deletePost: (id: number) => void,
    id: number
}

function Post(props: PostPropsType) {
    const deletePost = () => {
        props.deletePost(props.id)
    }
    return <div className={classes.post}>
        <div style={{backgroundImage: `${props.avatarSrc}`}} className={classes.avatar}></div>
        <div className={classes.message}>{props.message}</div>
        <button onClick={deletePost}>DELETE</button>
    </div>
}

export default Post