import React from 'react';
import styles from './Profile.module.css';
import UserTodos from '../UserTodos/UserTodos';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.profile} >
            <ProfileInfo {...props} />
            <UserTodos userId={props.id} />
        </div>
    )
}

export default Profile;
