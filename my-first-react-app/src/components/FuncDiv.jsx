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

export default FuncDiv;
