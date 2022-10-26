import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
};

export const AppHeader = ({ title }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
