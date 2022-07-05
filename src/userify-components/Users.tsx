// @ts-nocheck
import MyAppBar from "./MyAppBar";
import UserList from "./UserList";
import AddingSpace from "./AddingSpace";
import { useState } from "react";
import { Box } from "@mui/material";

const Users = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const userPropsList = users.map((user) => (
    <Box sx={{ bgcolor: "LightSteelBlue", width: 215, height: 70 }}>
      <li key="user">{user}</li>
    </Box>
  ));
  return (
    <div>
      This is Users page!
      <MyAppBar />
      <UserList setShow={setShow} show={show} userPropsList={userPropsList} />
      {show ? <AddingSpace setUsers={setUsers} /> : ""}
    </div>
  );
};

export default Users;
