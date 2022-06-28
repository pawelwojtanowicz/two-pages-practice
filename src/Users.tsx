import MyAppBar from "./userify-components/MyAppBar";
import UserList from "./userify-components/UserList";
import AddingSpace from "./userify-components/AddingSpace";

const Users = () => {
  return (
    <div>
      This is Users page!
      <MyAppBar />
      <UserList />
      <AddingSpace />
    </div>
  );
};

export default Users;
