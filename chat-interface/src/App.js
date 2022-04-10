import React from "react";
import { Typography, AppBar } from "@material-ui/core";

const App = () => {
  return (
    <>
      <AppBar position="static" color="inherit">
        <Typography varient="h2" align="center">
          Video chat
        </Typography>
        {/* insert video player */}
        {/* options-notification */}
      </AppBar>
    </>
  );
};

export default App;
