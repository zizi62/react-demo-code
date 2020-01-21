import React from 'react';
import styles from './Todo.module.css'
import AddBlock from '../../common/AddBlock/AddBlock';
import Task from '../Task/Task';


const Todo = (props) => {

    const { title, id, taskList } = props
    const addTask = (title) => props.addTask(title, id)

    return (
        <div className={styles.todo}>
            <span className={styles.del} onClick={() => props.delTodo(id)}>X</span>
            <p className={styles.title}>{title}</p>
            <AddBlock addBlock={addTask} placeholder={'Add task...'}/>
            <div className={styles.tasksBox}>
                {taskList.length !== 0
                    ? taskList.map(task => <Task key={task.id} {...task} 
                        delTask={props.delTask} 
                        changeCompleted={props.changeCompleted} 
                        changePriority = {props.changePriority}/>)
                    : <span>Add task</span>}

            </div>

        </div>
    )
}

export default Todo;
