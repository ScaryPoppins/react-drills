import React, { Component } from "react";


class Todo extends Component {





  render() {
    return (
      <div className="Todo">
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
