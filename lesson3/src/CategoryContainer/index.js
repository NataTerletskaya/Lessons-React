import React, { Component } from 'react';
import CategoryList from './CategoryList';
import './CategoryContainer.css';

class CategoryContainer extends Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    const form = ev.currentTarget;
    let input = form.children[0];

    this.props.addCategory(input.value);
    // empty input value
    input.value = '';
  }

  render() {
    return (
      <div className="category-container">
        <form className="category-form" onSubmit={this.handleFormSubmit}>
          <input type="text" name="category" placeholder="Enter category" />
        </form>
        <CategoryList
          activeCategoryId={this.props.activeCategoryId} 
          setActiveCategoryId={this.props.setActiveCategoryId}
          categories={this.props.categories} 
          deleteCategory={this.props.deleteCategory} />
      </div>
    );
  }
}

export default CategoryContainer;