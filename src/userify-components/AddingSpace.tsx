// @ts-nocheck
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import UserTextField from "./UserTextField";
import { useState } from "react";

interface Props {
  setUsers;
}

const AddingSpace: React.FC<Props> = ({ setUsers }) => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const change = () => {
    setUsers([name, lastName, age]);
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
        <Button variant="contained" onClick={change}>
          {"Submit -->"}
        </Button>
      </Box>
    </div>
  );
};

export default AddingSpace;
