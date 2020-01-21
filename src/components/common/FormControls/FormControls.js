import React from 'react';
import styles from './FormControls.module.css';


export const Input = ({input,meta, ...props}) => {
    const hasError = meta.touched&&meta.error;
    const errorBorder = {
        'border':'2px solid red'
    }
    return (
        <div className={styles.inputBox}>
            <input style ={hasError?errorBorder:null}{...input} {...props}/>

    {hasError&& <span className={styles.errorText}>{meta.error}</span>}
        </div>
    )
}
