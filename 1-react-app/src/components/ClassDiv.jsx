import React from "react";
import PropTypes from "prop-types";
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

ClassDiv.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};
export default ClassDiv;
