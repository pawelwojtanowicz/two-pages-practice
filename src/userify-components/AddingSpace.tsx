// @ts-nocheck
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import UserTextField from "./UserTextField";

const AddingSpace: React.FC = () => {
  return (
    <div>
      <Box ml={3} textAlign="left">
        <Typography>Adding new user</Typography>
        <UserTextField id="name" label="name" />
        <UserTextField id="last-name" label="last name" />
        <UserTextField id="age" label="age" />
        <UserTextField id="picture" label="picture" />
        <Button variant="contained">{"Submit -->"}</Button>
      </Box>
    </div>
  );
};

export default AddingSpace;
