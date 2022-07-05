// @ts-nocheck
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

interface Props {
  setShow;
  show;
  userPropsList;
}

const UserList: React.FC = ({ setShow, show, userPropsList }) => {
  const onChange = () => {
    setShow(!show);
  };
  return (
    <Box ml={3} textAlign="left">
      <Typography>User List</Typography>

      {userPropsList}

      <Button variant="contained" onClick={onChange}>
        Add (+)
      </Button>
    </Box>
  );
};

export default UserList;
