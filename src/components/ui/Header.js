import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": { color: () => "#ffff1a" },
    "&:active": { color: () => "#ffff1a" },
  },
  appbar: {
    height: "60px",
    backgroundColor: "#3973ac",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.root}>
            <AppBar position="fixed" classes={{ root: classes.appbar }}>
              <Toolbar>
                <Typography
                  variant="h5"
                  classes={{ root: classes.title }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <NavLink
                    to={{ pathname: "/" }}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    My Shopping List App
                  </NavLink>
                </Typography>
                <nav>
                  <ul className="header_menu">
                    <li>
                      <NavLink to={{ pathname: "/shoppingListHistory" }}>
                        Items bought
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={{ pathname: "/createShoppingList" }}>
                        Add items
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </Toolbar>
            </AppBar>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
