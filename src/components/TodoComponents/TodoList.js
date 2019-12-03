import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />
            ))}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
};

export default TodoList