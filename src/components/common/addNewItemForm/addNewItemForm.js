import React from 'react';
import styles from './addNewItemForm.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../FormControls/FormControls';
import { required, maxLength } from '../../../utils/validation/validationForm';

const maxTextSymbols20 = maxLength(20)

const AddNewItemForm = (props) => {
    const { submitting } = props;
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <div className={styles.inputBox}>
                <Field className={styles.inputItem} name='title' component={Input} type='text' placeholder='' validate={[required, maxTextSymbols20]} />
            </div>
            <button className={styles.btn} disabled={submitting}>Add</button>
        </form>
    )
}
export const NewItemForm = reduxForm({ form: 'newItemForm' })(AddNewItemForm)

export const NewTaskForm = reduxForm({ form: 'newTaskForm' })(AddNewItemForm)


