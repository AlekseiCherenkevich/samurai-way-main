import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../../redux/profile-reducer";

interface IProfileInfoProps {
    profile: ProfileType
}

function ProfileInfo(props: IProfileInfoProps) {
    return <div className={classes.profile_info}>
        <div className={classes.left_side}>
            <h1>{props.profile.fullName}</h1>
            {props.profile.photos.large
                ? <div style={{backgroundImage: `url("${props.profile.photos.large}")`}} className={classes.avatar}></div>
                : <div className={classes.avatar}></div>
            }
        </div>
        <div className={classes.right_side}>
            <div><b>Looking for a job</b>: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'No'}</div>
            <div><b>About me</b>: {props.profile.aboutMe}</div>
            <ul className={classes.contacts}><b>Contacts</b>:
                <li><b>facebook</b>: {props.profile.contacts.facebook}</li>
                <li><b>website</b>: {props.profile.contacts.website}</li>
                <li><b>vk</b>: {props.profile.contacts.vk}</li>
                <li><b>twitter</b>: {props.profile.contacts.twitter}</li>
                <li><b>instagram</b>: {props.profile.contacts.instagram}</li>
                <li><b>youtube</b>: {props.profile.contacts.youtube}</li>
                <li><b>github</b>: {props.profile.contacts.github}</li>
                <li><b>mainLink</b>: {props.profile.contacts.mainLink}</li>
            </ul>
        </div>
    </div>
}

export default ProfileInfo