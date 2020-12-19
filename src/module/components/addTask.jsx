import * as React from "react";
const AddTask = props => {
    return (
      <form>
        <input
          name="todo"
          value={props.value}
          type="text"
          onChange={props.inputChangeHandler}
          placeholder="Enter new task"
        />
        <button onClick={props.addTask}>Add Task</button>
      </form>
    );
  };
  export default AddTask;