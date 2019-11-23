import React from "react";

class Itemform extends React.Component {
  state = {
    title: "",
    email: "",
    description: ""
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newItem = {
      title: this.state.title,
      email: this.state.email,
      description: this.state.description
    };
  }

  render() {
    return (
      <div>
        <h1>Add an item to be donated:</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <br />
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <br />
          <div>
            <label>Description:</label>
            <br />
            <textarea
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Itemform;
