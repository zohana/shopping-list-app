import React from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import InputField from "./InputField";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px 26px 4px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    marginBottom: "2em",
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

const InputRangeDatePicker = ({
  fromDate,
  toDate,
  handleFromDate,
  handleToDate,
  toDateErrorText,
  toDateError,
  fromDateError,
  fromDateErrorText,
  handleDateBlur,
}) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <InputField
            label="Pick date from"
            type="datetime-local"
            inputName="min_date"
            value={fromDate}
            handleChange={handleFromDate}
            classes={{ root: classes.inputvalue }}
            handleBlur={handleDateBlur}
            errorText={fromDateErrorText}
            error={fromDateError}
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label="Pick date to"
            type="datetime-local"
            inputName="max_date"
            value={toDate}
            handleChange={handleToDate}
            classes={{ root: classes.inputvalue }}
            handleBlur={handleDateBlur}
            errorText={toDateErrorText}
            error={toDateError}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InputRangeDatePicker;
