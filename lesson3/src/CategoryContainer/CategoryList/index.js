import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.handleItemDelete = this.handleItemDelete.bind(this);    
  }

  handleItemDelete(categoryId) {
    this.props.deleteCategory(categoryId);
  }

  render() {
    const categoryItems = this.props.categories.map((category) => { 
      return <CategoryItem 
        key={category.id} 
        activeCategoryId={this.props.activeCategoryId} 
        setActiveCategoryId={this.props.setActiveCategoryId}
        category={category}
        handleItemDelete={this.handleItemDelete} />
    });
     
    return (
      <div className="category-list">
        {categoryItems}
      </div>
    );
  }
}

export default CategoryList;