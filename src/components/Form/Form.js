import React from 'react';
import styles from './Form.module.css';
import UserForm from '../UserForm/UserForm';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import { connect } from 'react-redux'
import { getUserData } from '../../Redux/selectors/userFormSelectors';
import { setNewUser, clearUserData } from '../../Redux/reducers/addNewUserFormReducer';



const Form = (props) => {
    return (
        <div className={styles.form}>
            <div className={styles.formItem}>
                <UserForm setNewUser={props.setNewUser} />
            </div>
            <div className={styles.formItem}>
                {props.user && <ProfileInfo {...props.user} closeProfile={props.clearUserData} />}

            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: getUserData(state)
})

const mapDispatchToProps = (dispatch) => ({
    setNewUser: (value) => dispatch(setNewUser(value)),
    clearUserData: () => dispatch(clearUserData())
})




export default connect(mapStateToProps, mapDispatchToProps)(Form);
