import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={classes.navbar}>
        <div className={classes.link}><NavLink to='/profile'>PROFILE</NavLink></div>
        <div className={classes.link}><NavLink to='/messages'>MESSAGES</NavLink></div>
        <div className={classes.link}><NavLink to='/users'>USERS</NavLink></div>
    </div>
}

export default Navbar