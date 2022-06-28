// @ts-nocheck
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const AddingSpace: React.FC = () => {
  return (
    <div>
      <Box ml={3} textAlign="left">
        <Typography>Adding new user</Typography>
        <Button variant="contained">{"Submit -->"}</Button>
      </Box>
    </div>
  );
};

export default AddingSpace;
