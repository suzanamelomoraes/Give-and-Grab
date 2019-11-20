import React from "react";
import { getCategories } from "../api";

class Categories extends React.Component {
  state = {
    categoriesState: []
  };

  componentDidMount() {
    getCategories().then(categoriesData => {
      this.setState({ categoriesState: categoriesData });
    });
  }

  //need to send category.id as props to Items.jsx
  //make category a link to Items.jsx

  render() {
    return (
      <ul>
        {this.state.categoriesState.map(category => {
          return <li key={category.id}> {category.name}</li>;
        })}
      </ul>
    );
  }
}

export default Categories;
