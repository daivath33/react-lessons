import PropTypes from "prop-types";

function FuncText(props) {
  const { text } = props;
  return <h3>{text}</h3>;
}

FuncText.propTypes = {
  text: PropTypes.string,
};
export default FuncText;
