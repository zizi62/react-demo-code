import React, { useEffect, useState } from 'react';
import styles from './Users.module.css'
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/reducers/usersReducer';
import { setProfile, closeProfile } from '../../Redux/reducers/profileReducer';
import User from './User/User';
import Profile from '../Profile/Profile';
import Filter from '../common/Filter/Filter';
import { getUsers, getLoading, getProfile, getUsersLoading } from '../../Redux/selectors/usersSelectors';
import Preloader from '../common/Preloader/Preloader';

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

    const closeProfile = () => {
        props.closeProfile();
        setSelectedId(null)
    }

    return (

        <div className={styles.users}>

            <div className={styles.usersBox}>
                <Filter filterName={filterName} />
                {!props.isUsersLoading ? <Preloader />
                    : props.usersList && props.usersList.filter((user) => user.username.toLocaleUpperCase().indexOf(filterValue.toLocaleUpperCase()) > -1).
                        map(user => <User key={user.id} user={user} selectedId={selectedId} setProfile={setUserId} profile={props.profile} />)}
            </div>
            <div className={styles.profileBox}>
                {!props.isLoading && props.profile && <div className={styles.loading}>Loading...</div>}
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
    isLoading: getLoading(state),
    profile: getProfile(state),
    isUsersLoading: getUsersLoading(state)
})

const mapDispatchToProps = (dispatch) => (
    {
        setUsers: () => dispatch(setUsers()),
        setProfile: (id) => dispatch(setProfile(id)),
        closeProfile: () => dispatch(closeProfile())

    }
)


export default connect(mapStateToProps, mapDispatchToProps)(Users);
