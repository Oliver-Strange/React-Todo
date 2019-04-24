import React from 'react';

const TodoForm = props => {
    return(
        <div className='toDoForm'>
            <form onSubmit={props.addToDo}>
                <input 
                onChange={props.handleChanges} 
                type='text'  
                name='todo' 
                placeholder='What do you need to do?' />
                <button>Add to list</button>
            </form>
            <button onClick={props.clearDone}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;