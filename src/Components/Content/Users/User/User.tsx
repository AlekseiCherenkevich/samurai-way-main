import classes from './User.module.css'
import {NavLink} from "react-router-dom";

interface IUserProps {
    id: number,
    name: string | null,
    photo: string | null,
    status: string | null,
    followed: boolean,
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const User: React.FC<IUserProps> = (props ) => {
    const onFollowClick = () => {
        props.follow(props.id)
    }
    const onUnfollowCLick = () => {
        props.unfollow(props.id)
    }
    return (
        <div className={classes.user}>
            <div className={classes.left_side}>
                <NavLink to={`/profile/${props.id}`}>
                    <div style={{backgroundImage: `url(${
                            props.photo !== null ? props.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatcm_du_J02VPfWWd1OEQahSIFE_-nY1aDw&usqp=CAU'
                        })`}} className={classes.avatar}></div>
                </NavLink>
                {props.followed
                    ? <button disabled={props.followingInProgress.includes(props.id)} className={classes.unfollowButton} onClick={onUnfollowCLick}>UNFOLLOW</button>
                    : <button disabled={props.followingInProgress.includes(props.id)} className={classes.followButton} onClick={onFollowClick}>FOLLOW</button>}
            </div>
            <div className={classes.right_side}>
                <h2 className={classes.name}>{props.name}</h2>
                <div className={classes.status}>{props.status}</div>
            </div>
        </div>
    );
};

export default User;