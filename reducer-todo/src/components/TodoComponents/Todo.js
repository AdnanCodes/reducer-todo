import React from "react";

const Todo = props => {
  console.log(props);
  return (
    <div
      className={`task${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.item.id)}
    >
      {props.item.task}
    </div>
  );
};

export default Todo;
