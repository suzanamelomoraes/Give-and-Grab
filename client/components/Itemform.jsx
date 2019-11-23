import React, { Component } from "react";

class Itemform extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name:</label>
            <br />
            <input type="text" name="title" />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <br />
            <input type="text" name="email" />
          </div>
          <br />
          <div>
            <label>Description:</label>
            <br />
            <textarea name="description" />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Itemform;
