// @ts-nocheck
import MyAppBar from "./MyAppBar";
import UserList from "./UserList";
import AddingSpace from "./AddingSpace";
import { useState } from "react";

const Users = () => {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const labels = ["name: ", "last name: ", "age: "];
  const userPropsList = users.map((user) => <li key="user">{user}</li>);
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
