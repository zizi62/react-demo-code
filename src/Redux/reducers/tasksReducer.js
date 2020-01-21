import { localStorageTaskData } from "../../api/localStorageData";
const uuidv4 = require('uuid/v4');

const SET_TASKS = 'tasksReducer/SET_TASKS';
const ADD_TASK = 'tasksReducer/ADD_TASK';
const DEL_TASK = 'tasksReducer/DEL_TASK';
const CHANGE_COMLETED = 'tasksReducer/CHANGE_COMLETED';

const initialState = {
    tasks: [],
    task:{}
}

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.tasks }
        case ADD_TASK:
            let newTask = {
                id: uuidv4(),
                todoId:action.todoId,
                title: action.title,
                completed: false,
                priority:"Low"
            }
            return { ...state, tasks: [...state.tasks, newTask] }
            case DEL_TASK:
                return{...state, tasks:action.tasks}

                case CHANGE_COMLETED:
                    return { ...state, tasks: [...state.tasks, newTask] }

        default:
            return state;
    }
}


export const getTasksSuccess = (tasks) => ({ type: SET_TASKS, tasks: tasks });
const setTaskSuccess = (title, todoId) => ({type: ADD_TASK, title: title, todoId:todoId });
const delTaskSuccess = (tasks) => ({ type: DEL_TASK, tasks: tasks });

export const setTasksList = () => async (dispatch) => {
    let response = await localStorageTaskData.getTasks()
    dispatch(getTasksSuccess(response))

}

export const setTask = (title, todoId) => async (dispatch, getState) => {
    dispatch(setTaskSuccess(title, todoId))
    let response = await localStorageTaskData.saveTask(getState().tasksList.tasks)
    dispatch(setTasksList())
}

export const delTask = (taskId)=> async (dispatch, getState) => {
    let newTasks = getState().tasksList.tasks.filter(task => task.id !== taskId)
dispatch(delTaskSuccess(newTasks))
    let response = await localStorageTaskData.saveTask(getState().tasksList.tasks)
    dispatch(setTasksList())
}

export const changeCompleted = (completed, taskId) => async (dispatch, getState) => {
    let newTasks = getState().tasksList.tasks.map(task => {
        if(task.id === taskId)task.completed = completed
        return task
    })
    let response = await localStorageTaskData.saveTask(newTasks)
    dispatch(setTasksList())
}

export const changePriority = (priority, taskId) => async (dispatch, getState) => {
    let newTasks = getState().tasksList.tasks.map(task => {
        if(task.id === taskId)task.priority = priority
        return task
    })
    let response = await localStorageTaskData.saveTask(newTasks)
    dispatch(setTasksList())
}



export default tasksReducer;
