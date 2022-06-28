// @ts-nocheck
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";

const MyAppBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="left"
          >
            {"||| Userify"}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyAppBar;
