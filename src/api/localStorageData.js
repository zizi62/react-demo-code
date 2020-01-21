const keys = {
    city:'city',
    todos:'todos',
    tasks:'tasks'
}

export const localStorageData = {
    saveCity(cityList) {
        debugger
        console.log(cityList)
        let cityAsString=JSON.stringify([...cityList].filter((city,i)=>i<3))
        localStorage.setItem(keys.city, cityAsString)
   
    },

    getCityList(){
        const cityList = JSON.parse(localStorage.getItem(keys.city)) 
        return cityList||[]
    }

}

export const localStorageTodoData = {
    
    saveTodo(todosList) {
        let todoAsString=JSON.stringify(todosList)
        localStorage.setItem(keys.todos, todoAsString)
   
    },

    getTodos(){
        let todoList = JSON.parse(localStorage.getItem(keys.todos)) 
        return todoList||[]
    }

}

export const localStorageTaskData = {
    
    saveTask(tasksList) {
        let taskAsString=JSON.stringify(tasksList)
        localStorage.setItem(keys.tasks, taskAsString)
    },

    getTasks(){
        let taskList = JSON.parse(localStorage.getItem(keys.tasks)) 
        return taskList||[]
    }

}