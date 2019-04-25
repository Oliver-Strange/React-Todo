import React from "react";

const toDoData = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default toDoData;
