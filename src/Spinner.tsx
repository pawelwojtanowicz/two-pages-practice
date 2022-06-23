import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";

const Spinner: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const switchCircle = () => {
    setLoading(!loading);
  };
  return (
    <div>
      {loading ? <CircularProgress /> : ""}
      <div>
        <Button variant="contained" onClick={switchCircle}>
          {loading ? "Stop circle" : "Start circle"}
        </Button>
      </div>
    </div>
  );
};
export default Spinner;
