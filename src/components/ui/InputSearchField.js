import React from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "300px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "40%",
  },
  iconButton: {
    padding: 10,
  },
}));

const InputSearchField = ({ value, handleBlur, handleChange, disabled }) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        color="primary"
        disabled
      >
        <SearchIcon color="primary" />
      </IconButton>
    </Paper>
  );
};

export default InputSearchField;
