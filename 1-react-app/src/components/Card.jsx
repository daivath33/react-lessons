import PropTypes from "prop-types";

const Card = (props) => {
  const { imageUrl, title, subtitle } = props;
  return (
    <div>
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
};
export default Card;
