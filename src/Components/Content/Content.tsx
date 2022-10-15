import classes from './Content.module.css'
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import {Route, Switch} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "../Login/Login";

function Content() {
    return <div className={classes.content}>
        <Switch>
            <Route path={'/profile/:userId?'}>
                <ProfileContainer/>
            </Route>
            <Route path={'/messages'}>
                <MessagesContainer/>
            </Route>
            <Route path={'/users'}>
                <UsersContainer/>
            </Route>
            <Route path={'/login'}>
                <Login/>
            </Route>
        </Switch>
    </div>
}

export default Content