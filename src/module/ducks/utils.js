export const toggleDataData = (taskList,itemId) => {
    console.log(taskList,"task",itemId)
    const taskItem = taskList.map(todo => {
        if (todo.id === itemId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    return taskItem;
}

export const removeTask = (taskList,itemId) => {
    return ( taskList.filter(data => data.id !== itemId))
}
export const toggleFilter = (filterList,itemId) => {
    const filterItem = filterList.map(filter => {
        return {
            ...filter,
            isActive: filter.value === itemId ? !filter.isActive : false
        };
      });
    return filterItem;
}
export const getFilterdList = (taskList,value,isActive)=>{
    var formattedResult;
    if(value === "active" && isActive){
        formattedResult= taskList.filter(task => !task.completed);   
    }
    else if(value === "completed" && isActive){
        formattedResult= taskList.filter(task => task.completed);  
    }
    return  formattedResult;
}
export const clearCompleted =(taskList)=>{
    const clearCompletedItem = taskList.map(task => {
        return {
            ...task,
            completed: false
        };
      });
    return clearCompletedItem;
}