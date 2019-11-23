import React from "react";
import { getItems } from "../api";
import Itemform from "./Itemform";

class Items extends React.Component {
  state = {
    itemsState: []
  };

  componentDidMount() {
    getItems(this.props.categoryId).then(itemsData => {
      this.setState({ itemsState: itemsData });
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.itemsState.map(item => {
            return (
              <li key={item.id}>
                {" "}
                {item.title} <br />
                {item.description} <br />
                {item.email} <br />
                <img
                  height="250"
                  width="250"
                  src={`/images/${item.image_path}.jpg`}
                />{" "}
              </li>
            );
          })}
        </ul>
        <div>
          <Itemform />
        </div>
      </>
    );
  }
}

export default Items;
