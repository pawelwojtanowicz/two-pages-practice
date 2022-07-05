// @ts-nocheck

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import UserTextField from "./UserTextField";
import { useState } from "react";
import { User } from "./types";

interface Props {
  hideAddUsers: () => void;
  addUser: (newUser: User) => void;
}

const AddingSpace: React.FC<Props> = ({ addUser, hideAddUsers }) => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();

  const changeUsers = () => {
    addUser({ name, age, id: 2 });
    hideAddUsers();
  };

  return (
    <div>
      <Box ml={3} textAlign="left">
        <Typography>Adding new user</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 1, mb: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <UserTextField id="name" label="name" onChangeHandler={setName} />
          <UserTextField
            id="last-name"
            label="last name"
            onChangeHandler={setLastName}
          />
          <UserTextField id="age" label="age" onChangeHandler={setAge} />
        </Box>
        <Button variant="contained" onClick={changeUsers}>
          {"Submit -->"}
        </Button>
      </Box>
    </div>
  );
};

export default AddingSpace;
