import React from "react";
import PropTypes from "prop-types";

class ClassButton extends React.Component {
  render() {
    return <button className={this.props.className}>{this.props.name}</button>;
  }
}

ClassButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

ClassButton.defaultProps = {
  name: "Submit",
};
export default ClassButton;
