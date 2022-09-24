import classes from './NewPost.module.css'

function NewPost() {
    return <div className={classes.new_post}>
        <div className={classes.title}>NEW POST</div>
        <div className={classes.wrapper}>
            <textarea></textarea>
            <button>ADD POST</button>
        </div>
    </div>
}

export default NewPost