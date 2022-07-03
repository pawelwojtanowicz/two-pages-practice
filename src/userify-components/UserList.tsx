// @ts-nocheck
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

interface Props {
  setShow;
}

const UserList: React.FC = ({ setShow, show }) => {
  const onChange = () => {
    setShow(!show);
  };
  return (
    <Box ml={3} textAlign="left">
      <Typography>User List</Typography>
      <Box sx={{ bgcolor: "LightSteelBlue", width: 400, height: 200 }}></Box>
      <Button variant="contained" onClick={onChange}>
        Add (+)
      </Button>
    </Box>
  );
};

export default UserList;
