import PropTypes from "prop-types";

const Greeiting = (props) => {
  const { name, text } = props;
  return (
    <h1>
      Hello, {name}, {text}
    </h1>
  );
};
Greeiting.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
};
Greeiting.defaultProps = {
  name: "User",
};

export default Greeiting;
