import React, { useEffect, useState } from 'react';
import styles from './UserTodos.module.css'
import { connect } from 'react-redux'
import { setTodoLists } from '../../Redux/reducers/userTodoReducer';
import UserTodo from './UserTodo/UserTodo';
import cn from 'classnames';
import { getTodosList } from '../../Redux/selectors/userTodosSelectors';


const UserTodos = (props) => {
    const [filterStatus, setFilterStatus] = useState('all')

    useEffect(() => {
        props.setTodoLists(props.userId)
        setFilterStatus('all')
    }, [props.userId])

    return (
        <div className = {styles.todos}>
             <div className = {styles.btnBox}>
                <button className={cn(styles.btn, {[styles.btnActive]:filterStatus==='done' })} onClick={() => setFilterStatus('done')}>Done</button>
                <button className={cn(styles.btn, {[styles.btnActive]:filterStatus==='inProgress' })} onClick={() => setFilterStatus('inProgress')}>In progress</button>
                <button className={cn(styles.btn, {[styles.btnActive]:filterStatus==='all' })} onClick={() => setFilterStatus('all')}>All</button>
            </div>
            <div className={styles.todosBox}>
                {props.todoLists.filter(list => {
                    switch (filterStatus) {
                        case 'all': return true                      
                        case 'inProgress':return list.completed === false
                        case 'done': return list.completed === true
                        default: return;
                    }
                }).map(todo => <UserTodo key={todo.id} {...todo} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoLists: getTodosList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodoLists: (userId) => dispatch(setTodoLists(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTodos)
