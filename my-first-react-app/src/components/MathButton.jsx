import PropTypes from "prop-types";
import React from "react";

const MathButton = (props) => {
  const { number1, number2, operator } = props;
  return <div></div>;
};

MathButton.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number,
  operator: PropTypes.string,
};

export default MathButton;
