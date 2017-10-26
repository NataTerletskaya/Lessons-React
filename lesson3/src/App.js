import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';
import Header from './Header';
import CategoryContainer from './CategoryContainer';
import TaskContainer from './TaskContainer';
import storage from './modules/storage';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        hideInactive: false
      },
      categories: storage.getItems(storage.categoryKey),
      tasks: storage.getItems(storage.taskKey)
    }
    this.activeCategoryId = null;

    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setActiveCategoryId = this.setActiveCategoryId.bind(this);
  }

  render() {
    return [
      <Header key="Header"/>,
      
      <CategoryContainer key="CategoryContainer" 
        activeCategoryId={this.activeCategoryId}
        setActiveCategoryId={this.setActiveCategoryId}
        addCategory={this.addCategory}
        deleteCategory={this.deleteCategory}
        categories={this.state.categories} />,

      <TaskContainer key="TaskContainer" 
        activeCategoryId={this.activeCategoryId}
        tasks={this.state.tasks}
        addTask={this.addTask}
        deleteTask={this.deleteTask}/>
        
    ];
  }
    
  // Category
  deleteCategory(categoryId) {
    let categories = this.state.categories.filter(category => category.id !== categoryId);
    
    this.setState({
      categories
    });

    storage.deleteItem(storage.categoryKey, categoryId);
  }

  addCategory(name) {
    if (name.length === 0) {
      return this.state;
    }
    const category = {
      id: storage.getNewId(),
      parentId: this.activeParentId,
      name
    }

    let categories = this.state.categories.slice();
    categories.push(category);
    
    this.setState({
      categories
    });

    storage.addItem(storage.categoryKey, category);
  }

  // Task
  deleteTask(taskId) {
    let tasks = this.state.tasks.filter(task => task.id !== taskId);
    
    this.setState({
      tasks
    });

    storage.deleteItem(storage.taskKey, taskId);
  }

  addTask(name) {
    if (name.length === 0) {
      return this.state;
    }
    // Task schema
    const task = {
      id: storage.getNewId(),
      categoryId: null,
      name,
      isDone: false
    }

    let tasks = this.state.tasks.slice();
    tasks.push(task);
    
    this.setState({
      tasks
    });

    storage.addItem(storage.taskKey, task);
  }

  setActiveCategoryId(categoryId) {    
    this.setActiveCategoryId = categoryId;
  }
}


export default App;
