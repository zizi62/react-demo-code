import React from 'react';
import styles from './UserTodo.module.css';
import cn from 'classnames';

const UserTodo = (props) => {
    return (
        <div className = {styles.todoItem}>
            {props.completed
            ?<p className = {cn(styles.status,styles.done)}>Done</p>
        :<p className = {cn(styles.status,styles.inProgress)}>In progress</p>}
           <p className = {styles.title}>{props.title}</p> 
        </div>
    )
}

export default UserTodo;
