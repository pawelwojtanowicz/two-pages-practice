import { useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgress } from "@mui/material";

const PhotosList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <CircularProgress /> : ""}</div>;
};
export default PhotosList;
