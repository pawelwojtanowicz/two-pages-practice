// @ts-nocheck
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

import axios from "axios";

const FetchedData: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPhotos(res.data);
      setLoading(false);
    });
  });
  const showData = () => {};

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <ul>
          {photos.map((photo) => (
            <li>
              <img src={photo.thumbnailUrl} alt="jakiesphoto" />
              {photo.title}
              {photo.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FetchedData;
