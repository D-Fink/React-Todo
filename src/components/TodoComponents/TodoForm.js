import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ""
        }
    }

    handleChange = event => {
        this.setState({newTask: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.newTask);
        this.setState({newTask: ""})
    };
    handleKeyDown = event => {
        if(event.key === "Enter") {
            this.props.addTask(this.state.newTask);
            this.setState({newTask: ""})
        };
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="task" value={this.state.newTask} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
            <button>Add Task</button>
        </form>
        );
    }
}

export default TodoForm