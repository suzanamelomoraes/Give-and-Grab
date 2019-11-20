import React from 'react'
import { getCategories } from '../api'

class Categories extends React.Component {
  state = {
    categoriesState: []
  }

  componentDidMount () {
    getCategories()
      .then(categoriesData => {
        this.setState(
          { categoriesState: categoriesData }
        )
      })
  }

  render () {
    return (
      <ul>
        {/* {console.log(this.state.categoriesState[0])} */}
        {this.state.categoriesState.map(category => {
          return <li key={category.id}> {category.name}</li>
        })}

      </ul>
    )
  }
}

export default Categories
