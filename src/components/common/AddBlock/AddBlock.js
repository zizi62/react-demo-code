import React, { useState } from 'react';
import styles from './AddBlock.module.css';
import cn from 'classnames';

const AddBlock = (props) => {

    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const addBlockItem = (e) => {
        e.preventDefault()
        if (!title) setError('ERROR')
        else {
            props.addBlock(title)
            setTitle('')
        }

    }
    const changeTitle = (e) => {
        setError('')
        setTitle(e.currentTarget.value)
    }

    return (
        <form className={styles.form} onSubmit={addBlockItem}>
            <div className={styles.inputBox}>
                <input className={cn(styles.inputItem, { [styles.error]: error })} 
                name='title' 
                type='text' 
                placeholder={props.placeholder||''} 
                onChange={(e) => changeTitle(e)} 
                value={title} />
            </div>
            <button className={styles.btn}>Add</button>
        </form>
    )
}
export default AddBlock; 