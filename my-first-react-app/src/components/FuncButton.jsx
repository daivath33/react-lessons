function FuncButton(props) {
  const { className, title } = props;
  return <button className={className}>{title}</button>;
}

export default FuncButton;
