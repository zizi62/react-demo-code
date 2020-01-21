import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
const {username, name,email,phone, company, address}= props
    return ( 
            <div className={styles.profileInfo}>
                <span className={styles.close} onClick={props.closeProfile}>Close</span>
                <p className={styles.title}>{username }</p>
                <p className={styles.profileItem}><b>Name:</b> {name}</p>
                <p className={styles.profileItem}><b>Email:</b> {email}</p>
                <p className={styles.profileItem}><b>Phone:</b> {phone}</p>
                <p className={styles.profileItem}><b>Company:</b> {company.name}</p>
                <div className={styles.profileItem}>
                    <p><b>Address:</b></p>
                    <p><b>Street:</b> {address.street}</p>
                    <p><b>Suite:</b> {address.suite}</p>
                    <p><b>City:</b> {address.city}</p>
                    <p><b>Zipcode:</b> {address.zipcode}</p>
                </div>
            </div>  
    )
}

export default ProfileInfo
