import React from 'react';
import styles from './UserForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required, emailValidate, numberlValidate, zipcodeValidate } from '../../utils/validation/validationForm';
import { Input } from '../common/FormControls/FormControls';
import { reset } from 'redux-form';

const maxTextSymbols15 = maxLength(15);
const maxTextSymbols10 = maxLength(10);

const Form = (props) => {
    const { pristine, reset, submitting } = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Nickname:</span>
                <Field
                    className={styles.inputItem}
                    name='nickName'
                    component={Input}
                    type='text'
                    placeholder='Nickname'
                    validate={[required, maxTextSymbols15]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>First name:</span>
                <Field
                    className={styles.inputItem}
                    name='firstName'
                    component={Input}
                    type='text'
                    placeholder='First name'
                    validate={[required, maxTextSymbols15]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Last name:</span>
                <Field
                    className={styles.inputItem}
                    name='lastName'
                    component={Input}
                    type='text'
                    placeholder='Last name'
                    validate={[required, maxTextSymbols15]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Phone:</span>
                <Field
                    className={styles.inputItem}
                    name='phone'
                    component={Input}
                    type='phone'
                    placeholder='Phone'
                    validate={[required, maxTextSymbols10, numberlValidate]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Email:</span>
                <Field
                    className={styles.inputItem}
                    name='email'
                    component={Input}
                    type='email'
                    placeholder='Email'
                    validate={[required, emailValidate]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Company:</span>
                <Field
                    className={styles.inputItem}
                    name='companyName'
                    component={Input}
                    type='text'
                    placeholder='Company'
                    validate={[required, maxTextSymbols10]} />
            </div>
            <div className={styles.formItem}>
                <span className={styles.inputTitle}>Address:</span>

                <div className={styles.formItem}>
                    <span className={styles.inputTitle}>Street:</span>
                    <Field
                        className={styles.inputItem}
                        name='street'
                        component={Input}
                        type='text'
                        placeholder='Street'
                        validate={[required]} />
                </div>
                <div className={styles.formItem}>
                    <span className={styles.inputTitle}>Suite:</span>
                    <Field
                        className={styles.inputItem}
                        name='suite'
                        component={Input}
                        type='text'
                        placeholder='Suite'
                        validate={[required]} />
                </div>
                <div className={styles.formItem}>
                    <span className={styles.inputTitle}>City:</span>
                    <Field
                        className={styles.inputItem}
                        name='city'
                        component={Input}
                        type='text'
                        placeholder='City'
                        validate={[required]} />
                </div>
                <div className={styles.formItem}>
                    <span className={styles.inputTitle}>Zipcode:</span>
                    <Field
                        className={styles.inputItem}
                        name='zipcode'
                        component={Input}
                        type='text'
                        placeholder='Zipcode'
                        validate={[required, zipcodeValidate, numberlValidate]} />
                </div>
            </div>
            <div className={styles.btnBox}>
                <button className={styles.btn} type="submit" disabled={submitting}>Submit</button>
                <button className={styles.btn} type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
            </div>
        </form>
    )
}
const NewUserForm = reduxForm({ form: 'newUserForm' })(Form)

const UserForm = (props) => {
    const sendUserData = (value, dispatch) => {
        props.setNewUser(value)
        dispatch(reset('newUserForm'))
    }
    return (
        <div className={styles.userForm}>
            <NewUserForm onSubmit={sendUserData} />
        </div>
    )
}

export default UserForm;
