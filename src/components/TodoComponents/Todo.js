import React from 'react';
import './Todo.css'

const Todo = props => {

    return (
        <div onClick={() => props.toggleCompleted(props.item.id)} className={`${props.item.completed ? "completed" : ""}`} id={props.item.id}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default Todo