import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="counter">
        <button onClick={this.increase}>+</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default ClassCounter;
