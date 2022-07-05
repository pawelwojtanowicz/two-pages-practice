import { Box, List, ListItem } from "@mui/material";
import { Typography } from "@mui/material";
import { User } from "./types";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <Box ml={3} textAlign="left">
      <Typography>User List</Typography>

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <div>name: {user.name}</div>
            <div>age: {user.age}</div>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;
