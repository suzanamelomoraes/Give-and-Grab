import React from 'react'
import { getCategories } from '../api'
import Items from './Items'

class Categories extends React.Component {
  state = {
    categoriesState: [],
    categoryId: ''
  };

  componentDidMount () {
    getCategories().then(categoriesData => {
      this.setState({ categoriesState: categoriesData })
    })
  }

  onClick = (categoryId) => {
    this.setState({ categoryId: categoryId })
  }

  // needs to send category.id as props to Items.jsx
  // make category a link to Items.jsx
  // <Link to='./Items>
  // <Items name = {category.id/>
  // onclick

  render () {
    return (
      <ul>
        {this.state.categoryId ? <Items categoryId={this.state.categoryId}/> : this.state.categoriesState.map(category => {
          return <li onClick={() => this.onClick(category.id)} key={category.id}> {category.name}</li>
        })}

      </ul>
    )
  }
}

export default Categories
