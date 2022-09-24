import classes from './ProfileInfo.module.css'

function ProfileInfo() {
    return <div className={classes.profile_info}>
        <div className={classes.left_side}>
            <h1>Name...</h1>
            <div className={classes.avatar}></div>
        </div>
        <div className={classes.right_side}>
            <div>Full name: Test</div>
            <div>Looking for a job: yes</div>
            <div>My professional skills: ...</div>
            <div>About me: test</div>
            <ul className={classes.contacts}>Contacts:
                <li>facebook:</li>
                <li>website:</li>
                <li>vk:</li>
                <li>twitter:</li>
                <li>instagram:</li>
                <li>youtube:</li>
                <li>github:</li>
                <li>mainLink:</li>
            </ul>
            <div>Status: Hi everybody! I'm looking for a job</div>
        </div>
    </div>
}

export default ProfileInfo