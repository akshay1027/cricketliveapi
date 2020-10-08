import React from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ padding: 10, backgroundColor: "#8c1aff" }}
    >
      <Toolbar>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Typography varient="h1" component="h1">
              T20 live
            </Typography>
          </Grid>
          <Grid item>
            <Typography varient="h3">
              Get quick updates of live and completed T20 matches
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
