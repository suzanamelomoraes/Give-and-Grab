import React from "react";
import { getItems } from "../api";

class Items extends React.Component {
  state = {
    itemsState: []
  };

  componentDidMount() {
    getItems().then(itemsData => {
      this.setState({ itemsState: itemsData });
    });
  }

  //getItems(cat.id = key)

  render() {
    return (
      <ul>
        {this.state.itemsState.map(item => {
          return <li key={item.id}> {item.name}</li>;
        })}
      </ul>
    );
  }
}

export default Items;
