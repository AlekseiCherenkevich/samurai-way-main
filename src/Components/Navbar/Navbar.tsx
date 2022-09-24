import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={classes.navbar}>
        <NavLink className={isActive => (isActive ? `${classes.active}` : `${classes.unselected}`)} to='/profile'>PROFILE</NavLink>
        <NavLink className={isActive => (isActive ? `${classes.active}` : `${classes.unselected}`)} to='/messages'>MESSAGES</NavLink>
        <NavLink className={isActive => (isActive ? `${classes.active}` : `${classes.unselected}`)} to='/users'>USERS</NavLink>
    </div>
}

export default Navbar