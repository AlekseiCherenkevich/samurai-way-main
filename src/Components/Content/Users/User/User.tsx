import classes from './User.module.css'

interface IUserProps {
    name: string | null,
    photo: string | null,
    status: string | null
}

const User = ({name, photo, status}: IUserProps) => {
    return (
        <div className={classes.user}>
            <div className={classes.left_side}>
                <div style={{backgroundImage: `url(${
                    photo !== null ? photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatcm_du_J02VPfWWd1OEQahSIFE_-nY1aDw&usqp=CAU'
                })`}} className={classes.avatar}></div>
                <button>FOLLOW</button>
            </div>
            <div className={classes.right_side}>
                <h2 className={classes.name}>{name}</h2>
                <div className={classes.status}>{status}</div>
            </div>
        </div>
    );
};

export default User;