import classes from './Post.module.css'

function Post() {
    return <div className={classes.post}>
        <div className={classes.avatar}></div>
        <div className={classes.status}>status...</div>
        <div className={classes.location}>location...</div>
    </div>
}

export default Post