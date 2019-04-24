import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDosOnState: toDos,
      toDo: {
        item: ''
      }
    }
  }
  
  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      toDo: {
        ...this.state.toDo,
        [event.target.item]: event.target.value
      }
    });
  };

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDosOnState: [...this.state.toDosOnState, this.state.item],
      toDo: {
        item: ''
      }
    });
  };
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className='toDoList'>
        
        </div>
      </div>
    );
  }
}

export default App;
