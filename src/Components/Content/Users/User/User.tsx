import classes from './User.module.css'
import {NavLink} from "react-router-dom";
import API from "../../../../api/api";

interface IUserProps {
    id: number,
    name: string | null,
    photo: string | null,
    status: string | null,
    followed: boolean,
    followingInProgress: Array<number>
    follow: (id: number) => void,
    unfollow: (id: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

const User = ({name, photo, status, followed, follow, unfollow, id, followingInProgress, toggleFollowingProgress}: IUserProps) => {
    const onFollowClick = () => {
        toggleFollowingProgress(true, id)
        API.follow(id).then(data => {
            if (data.resultCode === 0) {
                follow(id)
            }
            toggleFollowingProgress(false, id)
        })
    }
    const onUnfollowCLick = () => {
        toggleFollowingProgress(true, id)
        API.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                unfollow(id)
            }
            toggleFollowingProgress(false, id)
        })
    }
    return (
        <div className={classes.user}>
            <div className={classes.left_side}>
                <NavLink to={`/profile/${id}`}>
                    <div style={{backgroundImage: `url(${
                            photo !== null ? photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatcm_du_J02VPfWWd1OEQahSIFE_-nY1aDw&usqp=CAU'
                        })`}} className={classes.avatar}></div>
                </NavLink>
                {followed
                    ? <button disabled={followingInProgress.includes(id)} className={classes.unfollowButton} onClick={onUnfollowCLick}>UNFOLLOW</button>
                    : <button disabled={followingInProgress.includes(id)} className={classes.followButton} onClick={onFollowClick}>FOLLOW</button>}
            </div>
            <div className={classes.right_side}>
                <h2 className={classes.name}>{name}</h2>
                <div className={classes.status}>{status}</div>
            </div>
        </div>
    );
};

export default User;