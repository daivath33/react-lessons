import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { imageUrl, title, subtitle, className } = props;
  return (
    <div className={className}>
      <div className="card">
        <img src={imageUrl} alt={title}></img>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
export default Card;
