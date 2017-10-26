import React, { Component } from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

class TaskList extends Component {
  
  render() {
    const taskItems = this.props.tasks.map((task) => { 
      return <TaskItem 
        key={task.id} 
        deleteTask={this.props.deleteTask}
        task={task} />
    });

    return (
      <table className="task-list">
        <tbody>
          <tr>
            <th>Is Done</th>
            <th>Task Name</th>
            <th></th>
          </tr>
          {taskItems}
        </tbody>
      </table>
    );
  }
}

export default TaskList;