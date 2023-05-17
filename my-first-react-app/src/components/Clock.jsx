import React from "react";
import PropTypes from "prop-types";

const Clock = (props) => {
  const state = { date: new Date() };
  return (
    <div className={props.className}>
      <h2>It is {state.date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
