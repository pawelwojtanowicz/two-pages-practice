// @ts-nocheck
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

import axios from "axios";

const FetchedFlags: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
      )
      .then((res) => {
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
              <img src={photo.image} alt="jakiesphoto" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default FetchedFlags;
