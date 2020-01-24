import React, { useEffect, useState } from 'react';
import styles from './TodosLists.module.css'
import Todo from './Todo/Todo';
import AddNewBlock from '../common/AddBlock/AddBlock';
import { localStorageTodoData, localStorageTaskData } from '../../api/localStorageTodosData';
const uuidv4 = require('uuid/v4')


const TodoLists = () => {
    const [todoList, setTodos] = useState([]);
    const [taskList, setTasks] = useState([]);

    useEffect(() => {
        setTodos(localStorageTodoData.getTodos());
        setTasks(localStorageTaskData.getTasks())

    }, [])

    const addNewTodo = (value) => {
        let newTodo = { id: uuidv4(), title: value }
        localStorageTodoData.saveTodo([...todoList, newTodo])
        setTodos(localStorageTodoData.getTodos());
        
    }

    const delTodo = (todoId) => {
        localStorageTodoData.saveTodo(todoList.filter(todo => todo.id !== todoId))
        localStorageTaskData.saveTask(taskList.filter(task => task.todoId !== todoId))
        setTodos(localStorageTodoData.getTodos())
        setTasks(localStorageTaskData.getTasks())       
    }

    const addNewTask = (value, todoId) => {
        let newTask = {
            id: uuidv4(),
            todoId: todoId,
            title: value,
            completed: false,
            priority: "Low"
        }
        localStorageTaskData.saveTask([...taskList, newTask])
        setTasks(localStorageTaskData.getTasks())
    }

    const delTask = (taskId) => {
        localStorageTaskData.saveTask(taskList.filter(task => task.id !== taskId))
        setTasks(localStorageTaskData.getTasks())
    }

    const changeTask = ( value,taskId, item) =>{
        return taskList.map(task => {
            if (task.id === taskId) task[item] = value
            return task
        })
        
    }

    const changeCompleted = (value,taskId) => {
        let completed = 'completed'
        let newTaskList = changeTask(value, taskId, completed)
        localStorageTaskData.saveTask(newTaskList)
        setTasks(localStorageTaskData.getTasks())
}


    const changePriority = (value,taskId) => {
        let priority = 'priority'
        let newTaskList = changeTask(value, taskId, priority)
        localStorageTaskData.saveTask(newTaskList)
        setTasks(localStorageTaskData.getTasks()) 
    }

    const filterId = (arr, itemId) => arr.filter(ar => ar.todoId === itemId)

    return (
        <div className={styles.todoLists}>
            <div className={styles.formBox}>
                <AddNewBlock addBlock={addNewTodo} placeholder={'Add todo...'} />
            </div>
            <p className={styles.title}>Todos</p>
            <div className={styles.container}>
                <div className={styles.todoListsBox}>
                {todoList.length > 0
                ? todoList.map((todo) => <Todo key={todo.id}{...todo}
                delTodo={delTodo}
                addTask={addNewTask}
                delTask={delTask}
                changeCompleted={changeCompleted}
                changePriority={changePriority}
                taskList={filterId(taskList, todo.id)}/>)
                : <p>No any todo yet.</p>}
                </div>
            </div>
        </div>
    )
}


export default TodoLists;
