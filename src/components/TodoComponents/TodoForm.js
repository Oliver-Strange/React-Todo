import React from "react";

const TodoForm = props => {
  return (
    <div className="toDoForm">
      <form onSubmit={props.addToDo}>
        <input
          className="input"
          onChange={props.handleChanges}
          type="text"
          name="todo"
          value={props.value}
          placeholder="What ya need to do?"
        />
        <button>Add to list</button>
      </form>
      <button onClick={props.clearDone}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
