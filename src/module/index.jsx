import React from 'react';
import { connect } from "react-redux";
import {  bindActionCreators } from "redux";
import ListContainer from "./components/list_container";
import AddTask from "./components/addTask";
import FilterComponent from "./components/filter"
import { getToggleList,addTask,deleteParticularTask,getFilterList,clearCompleted } from "./ducks/actions";



class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      task: "",
    }
  }
  toggleComplete = itemId => {
    this.props.action.getToggleList(itemId)   
  };
  filterChange = (filterId,isActive) =>{
    this.props.action.getFilterList({
      filterId,isActive
    })
  }
  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };
  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      task: ""
    },()=>{
      this.props.action.addTask(newTask)
    });
  };
  deleteTask = itemId =>{
    this.props.action.deleteParticularTask(itemId)
  }
  clearCompleted = e => {
    e.preventDefault();
    this.props.action.clearCompleted()
  };
  render() {
    return (
      <div className="main_container">
        <div className="child_container">
          <div className="my_lis">my list</div>
          <div className="filter">
          <div style={{float: "left"}}>3 items remaining</div>
                <div style={{float: "right"}}  onClick={this.clearCompleted}>Clear completed</div>
                <div style={{margin: "0px auto",width: 100}}>
                  <FilterComponent filter={this.props.filter} filterChange={this.filterChange}/>
                </div>
        
           </div>
          <div className="sub_container">
          <AddTask
          taskList={this.props.taskList}
          value={this.state.task}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
        />
           <ListContainer
          taskList={this.props.taskList}
          toggleComplete={this.toggleComplete}
          deleteTask={this.deleteTask}
        />
        </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: {
    getToggleList: bindActionCreators(getToggleList, dispatch),
    addTask:bindActionCreators(addTask,dispatch),
    deleteParticularTask:bindActionCreators(deleteParticularTask,dispatch),
    getFilterList:bindActionCreators(getFilterList,dispatch),
    clearCompleted:bindActionCreators(clearCompleted,dispatch)
  }
});
const mapStateToProps = (state) => ({
  taskList:state.TaskList.filteredList !== undefined ? state.TaskList.filteredList : state.TaskList.taskList,
  task:state.TaskList.task,
  filter:state.TaskList.filter,
  filteredList:state.TaskList.filteredList
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
