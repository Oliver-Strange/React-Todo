import React from 'react';

const TodoForm = props => {
    return(
        <div className='toDoForm'>
            <form onSubmit={props.addToDo}>
                <input type='text' placeholder='What do you need to do?' value={props.value} onChange={props.handleChanges} name='todo' />
                <button>Add to list</button>
            </form>
            <button onClick={props.clearDone}>Clear Completed</button>
        </div>
    )
}

export default TodoForm;