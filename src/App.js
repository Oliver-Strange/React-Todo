import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
}
      ],
      todo: ''
    };
  };
  
  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
     
        [event.target.name]: event.target.value
    
    });
  };

  addToDo = event => {
    event.preventDefault();
    const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
    this.setState({
      toDos: [...this.state.toDos, newTodo],
      todo: ''
    });
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
  }

  clearDone = event => {
    event.preventDefault();
    let toDos = this.state.toDos.filter(todo => !todo.completed);
    this.setState({ toDos });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className='toDoList'>
          <TodoList toggleComplete={this.itsDone} toDos={this.state.toDos} />
          <TodoForm value={this.state.toDos} handleChanges={this.handleChanges} addToDo={this.addToDo} clearDone={this.clearDone} />
        </div>
      </div>
    );
  }
}

export default App;
