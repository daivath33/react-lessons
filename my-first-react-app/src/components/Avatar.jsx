import React from "react";

const Avatar = (props) => {
  return (
    <div className={props.className}>
      <h1>
        {props.name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </h1>
    </div>
  );
};

export default Avatar;
