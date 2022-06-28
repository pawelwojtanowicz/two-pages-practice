// @ts-nocheck
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import FetchedFlags from "./FetchedFlags";

const FlagsList: React.FC = () => {
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
        <div>{show ? <FetchedFlags /> : ""}</div>
      </div>
    </div>
  );
};
export default FlagsList;
