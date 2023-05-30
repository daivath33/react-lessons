import { useState, useEffect } from "react";
import Photo from "../Photo/Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="photos">
      {photosExists && (
        <>
          <Photo url={photos[0].url} title={photos[0].title} />
          <Photo url={photos[1].url} title={photos[1].title} />
          <Photo url={photos[2].url} title={photos[2].title} />
        </>
      )}
    </div>
  );
};

export default Photos;
