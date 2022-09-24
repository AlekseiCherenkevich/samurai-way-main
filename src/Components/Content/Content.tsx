import classes from './Content.module.css'
import Profile from "./Profile/Profile";

function Content() {
    return <div className={classes.content}>
        <Profile/>
    </div>
}

export default Content