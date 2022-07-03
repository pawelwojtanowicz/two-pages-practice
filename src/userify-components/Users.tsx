// @ts-nocheck
import MyAppBar from "./MyAppBar";
import UserList from "./UserList";
import AddingSpace from "./AddingSpace";
import { useState } from "react";

const Users = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      This is Users page!
      <MyAppBar />
      <UserList setShow={setShow} show={show} />
      {show ? <AddingSpace /> : ""}
    </div>
  );
};

export default Users;
