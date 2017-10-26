import React, { Component } from 'react';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {task: props.task};
    this.handleTaskDelete=this.handleTaskDelete.bind(this);
  }

  handleTaskDelete(taskId) {
    this.props.deleteTask(taskId);
  }

  render() {
    return (
      <tr className="task-item">
        <td><input type="checkbox"></input></td>
        <td>{this.state.task.name}</td>
        <td><button onClick={() => this.handleTaskDelete(this.state.task.id)}>X</button></td>
      </tr>
    );
  }
}

export default TaskItem;