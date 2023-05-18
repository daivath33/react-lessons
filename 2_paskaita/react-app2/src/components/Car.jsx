import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford", model: "Mustang", color: "red", year: 1964 };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div className="car-card">
        <h2>Class Component</h2>
        <h3>My {this.state.brand}</h3>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button className="btn" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Car;
