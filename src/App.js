import React from "react";
// import Todo from './components/TodoComponents/Todo';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDos: [],
      todo: ""
    };
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
    localStorage.setItem(event.target.name, event.target.value);
  };

  addToDo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      toDos: [...this.state.toDos, newTodo],
      todo: ""
    });
    localStorage.setItem("toDos", JSON.stringify(this.toDos));
    localStorage.setItem("newTodo", "");
  };

  itsDone = id => {
    let toDos = this.state.toDos.slice();
    toDos = toDos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ toDos });
  };

  clearDone = event => {
    event.preventDefault();
    let toDos = this.state.toDos.filter(todo => !todo.completed);
    this.setState({ toDos });
    localStorage.setItem("toDos", JSON.stringify(toDos));
  };

  render() {
    return (
      <div className='appArea'>
        <h2>Welcome to your Todo App!</h2>
        <div className="toDoList">
          <TodoList toggleComplete={this.itsDone} toDos={this.state.toDos} />
          <TodoForm
            value={this.state.todo}
            handleChanges={this.handleChanges}
            addToDo={this.addToDo}
            clearDone={this.clearDone}
          />
        </div>
      </div>
    );
  }
}

export default App;
