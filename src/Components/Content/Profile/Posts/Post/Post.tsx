import classes from './Post.module.css'

type PostPropsType = {
    message: string,
    avatarSrc: string
}

function Post(props: PostPropsType) {
    return <div className={classes.post}>
        <div style={{backgroundImage: `${props.avatarSrc}`}} className={classes.avatar}></div>
        <div className={classes.message}>{props.message}</div>
    </div>
}

export default Post