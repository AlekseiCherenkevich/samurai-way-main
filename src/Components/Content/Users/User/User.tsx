import classes from './User.module.css'
import {NavLink} from "react-router-dom";
import API from "../../../../api/api";

interface IUserProps {
    id: number,
    name: string | null,
    photo: string | null,
    status: string | null,
    followed: boolean,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}

const User = ({name, photo, status, followed, follow, unfollow, id}: IUserProps) => {
    const onFollowClick = () => {
        API.follow(id).then(data => {
            if (data.resultCode === 0) {
                follow(id)
            }
        })
    }
    const onUnfollowCLick = () => {
        API.unfollow(id).then(data => {
            if (data.resultCode === 0) {
                unfollow(id)
            }
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
                    ? <button className={classes.unfollowButton} onClick={onUnfollowCLick}>UNFOLLOW</button>
                    : <button className={classes.followButton} onClick={onFollowClick}>FOLLOW</button>}
            </div>
            <div className={classes.right_side}>
                <h2 className={classes.name}>{name}</h2>
                <div className={classes.status}>{status}</div>
            </div>
        </div>
    );
};

export default User;