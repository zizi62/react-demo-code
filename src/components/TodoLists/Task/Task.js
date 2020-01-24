import React, { useState } from 'react';
import styles from './Task.module.css';
import cn from 'classnames';

const Task = (props) => {

    const { title, priority, completed, id } = props
    const [isPrioritiEdit, setPriority] = useState(false)
    const [isCompleted, setCompleted] = useState(false)


    const completedChange = (e) => {
        setCompleted(e.currentTarget.checked)
        props.changeCompleted(e.currentTarget.checked, id)
    }
    const priorityEdit = () => setPriority(true)
    const closePriorityEdit = () => setPriority(false)
    const delTask = () => props.delTask(id)
    const changePriority = (e) => props.changePriority(e.currentTarget.value, id)
    


    return (
        <div className={cn(styles.task, { [styles.completedTask]: completed })}>
            <p className={styles.title}>{title}</p>
            <div className={styles.completed}><span>Completed:</span> <input type='checkbox' checked={completed} name="completed" onChange={completedChange} /></div>
            <div className={styles.priority} onDoubleClick={priorityEdit} onBlur={closePriorityEdit}><span>Priority:  </span>
                {isPrioritiEdit
                    ? <select  onBlur = {changePriority} >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>    
                    </select>
                    : <span className={cn(styles.priorityColor,{ [styles.low]:priority==='Low',
                    [styles.medium]:priority==='Medium',
                    [styles.high]:priority==='High',
                })} >{priority}</span>
                }
            </div>
            <div><span className={styles.del} onClick={delTask}>X</span></div>
        </div>
    )
}

export default Task;
