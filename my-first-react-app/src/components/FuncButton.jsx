import PropTypes from "prop-types";
function FuncButton(props) {
  const { className, title } = props;
  return <button className={className}>{title}</button>;
}

FuncButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default FuncButton;
