import React from "react";
import ClassButton from "./ClassButton";

class ClassDiv extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>{this.props.heading}</h3>
        <p>{this.props.text}</p>
        <ClassButton className="btn btn-inverse" name="Submit"></ClassButton>
      </div>
    );
  }
}

export default ClassDiv;
