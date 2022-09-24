import classes from './NewPost.module.css'

type NewPostPropsType = {
    newPostText: string
}

function NewPost(props: NewPostPropsType) {
    return <div className={classes.new_post}>
        <div className={classes.title}>NEW POST</div>
        <div className={classes.wrapper}>
            <textarea>{props.newPostText}</textarea>
            <button>ADD POST</button>
        </div>
    </div>
}

export default NewPost