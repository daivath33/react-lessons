import PropTypes from "prop-types";

const Avatar = (props) => {
  const { name, className } = props;
  return (
    <div className={className}>
      <h1>
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .toUpperCase()}
      </h1>
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
export default Avatar;
