// @ts-nocheck
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { idText } from "typescript";
import { TextField } from "@mui/material";

interface Props {}

const UserTextField: React.FC<Props> = ({ id, label, onChangeHandler }) => {
  return (
    <Box>
      <TextField
        id={id}
        label={label}
        variant="outlined"
        size="small"
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </Box>
  );
};

export default UserTextField;
