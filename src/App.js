import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todo = [{
  task: "Create A Task",
  id: 123,
  completed: false
}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }
  
  addTask = newTaskText => {
    const newTask = {
      task: newTaskText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  }

  clearCompleted = () => {
    this.setState({todo: this.state.todo.filter(item => {return item.completed === false})})
  }

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
        <TodoForm addTask={this.addTask}/>
      </div>
    );
  }
}
export default App;
