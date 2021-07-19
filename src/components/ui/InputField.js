import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputvalue: {
    backgroundColor: "white",
    marginTop: "2em",
    width: "80%",
  },
  iconButton: {
    padding: 10,
    display: "block",
  },
  hideIconButton: {
    display: "none",
  },
}));

const InputField = ({
  label,
  inputName,
  value,
  placeHolder,
  handleChange,
  handleBlur,
  error,
  errorText,
  type,
}) => {
  const classes = useStyles();
  return (
    <TextField
      type={type}
      variant="outlined"
      label={label}
      classes={{ root: classes.inputvalue }}
      placeholder={placeHolder}
      name={inputName}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      helperText={errorText}
      autoComplete="off"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default InputField;
