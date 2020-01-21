import React, { useEffect, useState } from 'react';
import styles from './Users.module.css'
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/reducers/usersReducer';
import { setProfile, closeProfile, getProfileSuccess } from '../../Redux/reducers/profileReducer';
import User from './User/User';
import Profile from '../Profile/Profile';
import Filter from '../common/Filter/Filter';
import Preloader from '../common/Preloader/Preloader';
import { getUsers, getLoding, getProfile } from '../../Redux/selectors/usersSelectors';




const Users = (props) => {

    const [filterValue, setFilterValue] = useState('');
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        props.setUsers()
    }, []);

    const filterName = (value) => setFilterValue(value)
    

    const setUserId = (userId) => {
        props.setProfile(userId)
        setSelectedId(userId)
    }

    const closeProfile = ()=>{
        props.closeProfile();
        setSelectedId(null)
    }

    return (

        <div className={styles.users}>
           
            <div className={styles.usersBox}>
                <Filter filterName={filterName} />
                {props.usersList && props.usersList.filter((user) => user.username.toLocaleUpperCase().indexOf(filterValue.toLocaleUpperCase()) > -1).
                    map(user => <User key={user.id} user={user} selectedId={selectedId} setProfile={setUserId} profile={props.profile} />)}
            </div>
            <div className={styles.profileBox}>
            {!props.isLoding&&props.profile&&<div className={styles.loding}>Loding...</div>}
            {props.profile
                ? <Profile {...props.profile} closeProfile={closeProfile} />
                : <div></div>
            }
            </div>

        </div>
    )
}
const mapStateToProps = (state) => ({
    usersList: getUsers(state),
    isLoding: getLoding(state),
    profile: getProfile(state)
})

const mapDispatchToProps = (dispatch) => (
    {
        setUsers: () => dispatch(setUsers()),
        setProfile: (id) => dispatch(setProfile(id)),
        closeProfile: () => dispatch(closeProfile())

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Users);
