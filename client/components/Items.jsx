import React from 'react'
import { getItems } from '../api'

class Items extends React.Component {
  state = {
    itemsState: []
  };

  componentDidMount () {
    getItems(this.props.categoryId).then(itemsData => {
      this.setState({ itemsState: itemsData })
    })
  }

  // getItems(cat.id = key)
  // needs to receive categories.id to send to the rest api

  render () {
    return (
      <ul>
        {this.state.itemsState.map(item => {

          return <li key={item.id}> {item.title} <br/>{item.description} <br/>
            {item.email} <br/><img height="250" width="250" src={`/images/${item.image_path}.jpg`}/> </li>
        })}
      </ul>
    )
  }
}

export default Items
