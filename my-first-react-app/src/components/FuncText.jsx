import PropTypes from "prop-types";

function FuncText(props) {
  const { text, className } = props;
  return <h3 className={className}>{text}</h3>;
}

FuncText.propTypes = {
  text: PropTypes.string,
};
export default FuncText;
