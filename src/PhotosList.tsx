// @ts-nocheck
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import FetchedData from "./FetchedData";

const PhotosList: React.FC = () => {
  const [show, setShow] = useState(false);
  const click = () => {
    setShow(true);
  };
  return (
    <div>
      <div>
        <Button variant="contained" onClick={click}>
          Fetch data
        </Button>
        <div>{show ? <FetchedData /> : ""}</div>
      </div>
    </div>
  );
};
export default PhotosList;
