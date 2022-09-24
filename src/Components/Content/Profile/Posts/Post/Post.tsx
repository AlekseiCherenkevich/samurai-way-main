import classes from './Post.module.css'

type PostPropsType = {
    status: string,
    location: string,
    avatarSrc: string
}

function Post(props: PostPropsType) {
    debugger
    return <div className={classes.post}>
        <div style={{backgroundImage: `${props.avatarSrc}`}} className={classes.avatar}></div>
        <div className={classes.status}>{props.status}</div>
        <div className={classes.location}>{props.location}</div>
    </div>
}

export default Post