import React, { Component } from 'react';
import './CategoryItem.css';
import {
  Route,
  Link,
  withRouter
} from 'react-router-dom';

class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {category: props.category, active: false};
    this.handleClick = this.handleClick.bind(this);
    this.setActiveCategoryId = props.setActiveCategoryId;
  }

  handleClick(categoryId) {
    this.setActiveCategoryId(categoryId);
    this.setState({
      active: !this.state.active,
      category: this.state.category
    });
  }

  render() {
    return (
      <Link to={ {pathname: `/category/${this.state.category.id}`} }>
      <div className="category-item" 
        onClick={() => this.handleClick(this.state.category.id)}>
        {this.state.category.name}
        <div className="category-item-actions">
          <button onClick={() => this.props.handleItemDelete(this.state.category.id)}>X</button>
        </div>
      </div>
      </Link>
    );
  }
}
export default CategoryItem;