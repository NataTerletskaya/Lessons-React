import React, { Component } from 'react';
import TaskList from './TaskList';
import './TaskContainer.css';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    let input = form.children[0];

    this.props.addTask(input.value);
    // empty input value
    input.value = '';
  }

  render() {
    return (
      <div className="task-container">
        <form className="task-form" onSubmit={this.handleFormSubmit}>
          <input type="text" name="task" placeholder="Enter task" />
        </form>
        <TaskList 
          tasks={this.props.tasks}
          deleteTask={this.props.deleteTask}/>
      </div>
    );
  }
}


export default TaskContainer;