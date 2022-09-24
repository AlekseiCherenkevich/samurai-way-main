import classes from './Content.module.css'
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import {Route, Switch} from "react-router-dom";

function Content() {
    return <div className={classes.content}>
        <Switch>
            <Route path={'/profile'}>
                <Profile/>
            </Route>
            <Route path={'/messages'}>
                <Messages/>
            </Route>
            <Route path={'/users'}>
                <Users/>
            </Route>
        </Switch>
    </div>
}

export default Content