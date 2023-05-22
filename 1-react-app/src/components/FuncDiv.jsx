import PropTypes from "prop-types";
import FuncButton from "./FuncButton";

const FuncDiv = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <FuncButton className="btn" title="Login"></FuncButton>
    </div>
  );
};

FuncDiv.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default FuncDiv;
