// @ts-nocheck
import MyAppBar from "./MyAppBar";
import UserList from "./UserList";
import AddingSpace from "./AddingSpace";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { User } from "./types";

const Users = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const showAddUsers = () => {
    setShow(true);
  };

  const hideAddUsers = () => {
    setShow(false);
  };

  const addUser = (newUser: User) => {
    setUsers((currentUsers) => {
      console.log(currentUsers);

      return [...currentUsers, newUser];
    });
  };

  return (
    <div>
      This is Users page!
      <MyAppBar />
      <UserList users={users} />
      <Button
        onClick={() => {
          showAddUsers();
        }}
      >
        Add user +
      </Button>
      {show ? (
        <AddingSpace hideAddUsers={hideAddUsers} addUser={addUser} />
      ) : null}
    </div>
  );
};

export default Users;
