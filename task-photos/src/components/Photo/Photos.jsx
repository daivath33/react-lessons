import Photo from "./Photo";
import "./Photos.css";

const Photos = ({ data }) => {
  return (
    <div className="photos">
      {data.map((el) => (
        <Photo key={el.id} imageUrl={el.imageUrl} title={el.title} />
      ))}
      <Photo />
    </div>
  );
};

export default Photos;
