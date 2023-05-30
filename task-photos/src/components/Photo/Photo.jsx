import "./Photo.css";

const Photo = ({ id, imageUrl, title }) => {
  return (
    <div className="photo-card">
      <img src={imageUrl} />
      <p>{title}</p>
    </div>
  );
};

export default Photo;
