import classes from './Navbar.module.css'

function Navbar() {
    return <div className={classes.navbar}>
        <div className={classes.link}>PROFILE</div>
        <div className={classes.link}>MESSAGES</div>
        <div className={classes.link}>USERS</div>
    </div>
}

export default Navbar