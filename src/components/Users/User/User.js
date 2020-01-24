import React from 'react';
import styles from './User.module.css';
import cn from 'classnames';

export const User = (props) => {

    const viewProfile = (id) => props.setProfile(id)

    return (
        <div className={cn(styles.userBox, { [styles.userActive]: props.selectedId === props.user.id })}>
            <p className={styles.username}>{props.user.username}</p>
            <button className={styles.btn} onClick={() => viewProfile(props.user.id)} >View profile</button>
        </div>
    )
}


export default User;


