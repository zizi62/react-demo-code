import React, { useEffect } from 'react';
import styles from './TodosLists.module.css'
import Todo from './Todo/Todo';
import { connect } from 'react-redux';
import { setTodoLists, setTodo, delTodo } from '../../Redux/reducers/todosReducer';
import { setTasksList, setTask, delTask, changeCompleted, changePriority } from '../../Redux/reducers/tasksReducer';
import AddNewBlock from '../common/AddBlock/AddBlock';
import {getTodos } from '../../Redux/selectors/todoSelectors';
import { getTasks } from '../../Redux/selectors/tasksSelectors';


const TodoLists = (props) => {
    useEffect(() => {
        props.setTasksList()
        props.setTodoLists()
    }, [])

    const saveTodo = (value) => props.setTodo(value)
    const filterId = (arr, itemId) => arr.filter(ar => ar.todoId === itemId)
        
    return (
        <div className={styles.todoLists}>

            <div className={styles.formBox}>
                <AddNewBlock addBlock={saveTodo} placeholder={'Add todo...'}/>
            </div>
            <p className={styles.title}>Todos</p>
            <div className={styles.container}>
            <div className={styles.todoListsBox}>
                {props.todoLists.map((todo) => <Todo key={todo.id}{...todo}
                    delTodo={props.delTodo}
                    addTask={props.addTask}
                    delTask={props.delTask}
                    changeCompleted ={props.changeCompleted}
                    changePriority={props.changePriority}
                    taskList={filterId(props.tasks, todo.id)}
                />)}
            </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({
        todoLists: getTodos(state),
        tasks: getTasks(state)
    })
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            setTodoLists: () => (dispatch(setTodoLists())),
            setTodo: (title) => (dispatch(setTodo(title))),
            delTodo: (todoId) => (dispatch(delTodo(todoId))),
            setTasksList: () => (dispatch(setTasksList())),
            addTask: (title, todoId) => (dispatch(setTask(title, todoId))),
            delTask: (taskId) => (dispatch(delTask(taskId))),
            changeCompleted:(complited, taskId) => (dispatch(changeCompleted(complited,taskId))),
            changePriority: (proirity, taskId)=>(dispatch(changePriority(proirity, taskId)))
        }
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
