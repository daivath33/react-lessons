import React from "react";

class ClassButton extends React.Component {
  render() {
    return <button className={this.props.className}>{this.props.name}</button>;
  }
}

export default ClassButton;
