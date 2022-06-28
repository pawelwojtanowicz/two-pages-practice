// @ts-nocheck
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

interface Props {}

const UserList: React.FC = () => {
  return (
    <Box ml={3} textAlign="left">
      <Typography>User List</Typography>
      <Button variant="contained">Add (+)</Button>
    </Box>
  );
};

export default UserList;
