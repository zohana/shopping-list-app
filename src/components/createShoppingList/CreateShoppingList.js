import React, { useState } from "react";
import {
  Grid,
  Button,
  Paper,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import InputField from "../ui/InputField";
import moment from "moment";
import CloseIcon from "@material-ui/icons/Close";

import List from "../ui/List";

const useStyles = makeStyles((theme) => ({
  customGrid: {
    marginTop: "2.5em",
  },
  title: {
    margin: "1em auto 1em auto",
    display: "block",
  },
  button: {
    marginTop: "2em",
  },
  inputvalue: {
    backgroundColor: "white",
    marginTop: "2em",
    width: "80%",
  },
  paper: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  trashCan: {
    color: "rgb(190, 55, 55)",
  },
  remove: {
    position: "relative",
    left: "23px",
    top: "-13px",
  },
  no_data: {
    marginTop: "2em",
    fontWeight: "500",
    color: "#ff9933",
  },
}));

const CreateShoppingList = () => {
  const classes = useStyles();
  const [listData, setListData] = useState([]);
  const [inputValues, setInputValues] = useState({
    item_name: "",
    store_name: "",
    store_url: "",
    date_time: "",
  });

  const [errorOnName, setErrorOnName] = useState(false);
  const [errorOnStoreName, setErrorOnStoreName] = useState(false);
  const [errorOnStoreUrl, setErrorOnUrl] = useState(false);
  const [errorOnDate, setErrorOnDate] = useState(false);

  const { item_name, store_name, store_url, date_time } = inputValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // item name validations
  const handleValidationsItemName = (e) => {
    //item name
    let itemNameRegex = /^[a-zA-Z ]*$/;
    if (
      inputValues.item_name === "" ||
      itemNameRegex.test(inputValues.item_name) === false
    ) {
      setErrorOnName(true);
    } else {
      setErrorOnName(false);
    }
  };
  // store name validations
  const handleValidationsStoreName = (e) => {
    //storename
    let storeNameRegex = /^[a-zA-Z ]*$/;
    if (
      inputValues.store_name === "" ||
      storeNameRegex.test(inputValues.store_name) === false
    ) {
      setErrorOnStoreName(true);
    } else {
      setErrorOnStoreName(false);
    }
  };

  // store url validations
  const handleValidationsStoreUrl = (e) => {
    let storeUrlRegex =
      /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
    if (
      inputValues.store_url === "" ||
      storeUrlRegex.test(inputValues.store_url) === false
    ) {
      setErrorOnUrl(true);
    } else {
      setErrorOnUrl(false);
    }
  };

  // date-time validations
  const handleValidationsDateTime = (e) => {
    if (inputValues.date_time === "") {
      setErrorOnDate(true);
    } else {
      setErrorOnDate(false);
    }
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();

    setListData((prevItems) => [
      {
        item_name: inputValues.item_name,
        store_name: inputValues.store_name,
        store_url: inputValues.store_url,
        date_time: inputValues.date_time,
      },
      ...prevItems,
    ]);
    setInputValues({
      item_name: "",
      store_name: "",
      store_url: "",
      date_time: "",
    });
  };

  // remove item entry from table row
  const handleRemoveItem = (index) => {
    const shoppingList = [...listData];
    shoppingList.splice(index, 1);
    setListData(shoppingList);
  };

  // generate the list of items in table
  const renderList = () => {
    return listData.map((item, i) => (
      <div className="rTableRow" key={i}>
        <div className="rTableCell">{item.item_name}</div>
        <div className="rTableCell">
          <a href={item.store_url} target="_blank" rel="noreferrer">
            {item.store_name}
          </a>
        </div>
        <div className="rTableCell">
          <Grid container>
            <Grid xs={11}>
              {moment(item.date_time).format("dddd, MMMM Do, YYYY, HH:MM")}
            </Grid>
            <Grid item xs={1}>
              <IconButton
                size="small"
                classes={{ root: classes.remove }}
                onClick={() => handleRemoveItem(i)}
                component="button"
                aria-label="remove"
              >
                <CloseIcon
                  fontSize="small"
                  classes={{ root: classes.trashCan }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </div>
    ));
  };
  return (
    <div
      style={{
        width: "98%",
        margin: "0 auto",
        display: "block",
        paddingBottom: "2.5em",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.title }}
      >
        Add to my list
      </Typography>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <InputField
              label="Item Name"
              type="text"
              inputName="item_name"
              value={item_name}
              placeholder="Item Name"
              handleChange={(e) => handleInputChange(e)}
              handleBlur={(e) => handleValidationsItemName(e)}
              errorText={errorOnName ? "Please enter item name" : ""}
              error={errorOnName}
              show={false}
            />
            <br />
            <InputField
              label="Store Name"
              type="text"
              inputName="store_name"
              value={store_name}
              handleChange={(e) => handleInputChange(e)}
              handleBlur={(e) => handleValidationsStoreName(e)}
              errorText={errorOnStoreName ? "Please enter store name" : ""}
              error={errorOnStoreName}
            />
            <br />
            <InputField
              label="Store Url"
              type="text"
              inputName="store_url"
              value={store_url}
              handleChange={(e) => handleInputChange(e)}
              handleBlur={(e) => handleValidationsStoreUrl(e)}
              errorText={errorOnStoreUrl ? "Please enter valid url" : ""}
              error={errorOnStoreUrl}
              placeHolder="www.google.com"
            />
            <br />

            <InputField
              label="Date/Time"
              type="datetime-local"
              inputName="date_time"
              value={date_time}
              handleChange={(e) => handleInputChange(e)}
              handleBlur={(e) => handleValidationsDateTime(e)}
              errorText={errorOnDate ? "Please enter date" : ""}
              error={errorOnDate}
            />
            <br />
            <Button
              type="button"
              variant="outlined"
              color="primary"
              classes={{ root: classes.button }}
              onClick={(e) => handleAddButtonClick(e)}
              disabled={
                inputValues.item_name === "" ||
                inputValues.store_name === "" ||
                inputValues.store_url === "" ||
                inputValues.date_time === "" ||
                errorOnName ||
                errorOnStoreName ||
                errorOnStoreUrl ||
                errorOnDate
                  ? true
                  : false
              }
            >
              Add
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <br />

      <Grid container>
        <List
          children={
            listData.length > 0 ? (
              renderList()
            ) : (
              <Typography
                variant="subtitle1"
                component="h4"
                align="center"
                color="textPrimary"
                classes={{ root: classes.no_data }}
              >
                No data. Please fill the form to enter the data in your list
              </Typography>
            )
          }
        />
      </Grid>
    </div>
  );
};

export default CreateShoppingList;
