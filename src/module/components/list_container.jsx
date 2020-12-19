import * as React from "react";
const closeIcon = require("../../app/img/close.svg");
import {
    Wrapper,ImgWrapper
} from "../StyledModule";

const ListContainer = (props) => {
  return (
    <div>
      {props.taskList.map((task) => (
        <Wrapper>
          <div className="wrapper">
            <div
              className="sub_wrapper"
              key={task.id}
              onClick={() => {
                props.toggleComplete(task.id);
              }}
            >
              <input type="radio" checked={task.completed} />

              <div
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.task}
              </div>
            </div>
            <img
             className="close"
              src={closeIcon}
              alt="close"
              onClick={() => {
                props.deleteTask(task.id);
              }}
            />
          </div>
        </Wrapper>
      ))}
    </div>
  );
};

export default ListContainer;
