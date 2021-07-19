import React, { useEffect, useState } from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import moment from "moment";

import { getShoppingListItemsData } from "../../services/index";
import InputSearchField from "../ui/InputSearchField";
import InputRangeDatePicker from "../ui/InputRangeDatePicker";
import List from "../ui/List";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "1em auto 1em auto",
    display: "block",
  },
  filter: {
    marginBottom: "1em",
    fontWeight: "500",
  },
  filter_date: {
    marginBottom: "0em",
    fontWeight: "500",
  },
  inputvalue: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "40%",
  },
}));

const ShoppingListHistory = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [querryString, setQuerryString] = useState("");
  const [searchParam] = useState(["item_name", "store_name", "date_time"]);
  const [fromDateQuerryString, setFromDateQuerryString] = useState("");
  const [toDateQuerryString, setToDateQuerryString] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [errorToDate, setErrorToDate] = useState(false);
  const [errorFromDate, setErrorFromDate] = useState(false);

  // get the data
  useEffect(() => {
    getShoppingListItemsData()
      .then((resp) => {
        setData(resp);
        setOriginalData(resp);
        setLoading(false);
      })
      .catch((err) => {
        console.log("axios err ", err);
        setData([]);
      });

    return () => {
      console.log("axios clean up");
    };
  }, []);

  // apply filters and generate date
  const handleSearchThroughData = (data) => {
    // convert the date format selected from the date picker
    let formattedToDate = new Date(toDateQuerryString);

    // convert the date format selected from the date picker
    let formattedFromDate = new Date(fromDateQuerryString);

    return data.filter((item) => {
      if (toDateQuerryString !== "") {
        return (
          formattedFromDate <= new Date(item.date_time) &&
          new Date(item.date_time) <= formattedToDate
        );
      }
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(querryString.toLowerCase()) > -1
        );
      });
    });
  };

  // clear filters
  const handleClearSearch = (e, originalData) => {
    setToDateQuerryString("");
    setFromDateQuerryString("");
    setData(originalData);
  };

  // date rangle validations
  const handleDateRangeValidations = (e) => {
    // From date
    if (
      fromDateQuerryString === "" ||
      fromDateQuerryString > toDateQuerryString
    ) {
      setErrorFromDate(true);
    } else {
      setErrorFromDate(false);
    }

    // To date
    if (
      toDateQuerryString === "" ||
      fromDateQuerryString > toDateQuerryString ||
      fromDateQuerryString === toDateQuerryString
    ) {
      setErrorToDate(true);
    } else {
      setErrorToDate(false);
    }
  };

  return (
    <div
      style={{
        width: "98%",
        margin: "0 auto",
        display: "block",
        paddingBottom: "2.5em",
      }}
      className="page_container"
    >
      <Typography
        variant="h4"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.title }}
      >
        My Shopping History
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.filter }}
      >
        Filter by item name, store name
      </Typography>
      <InputSearchField
        handleChange={(e) => setQuerryString(e.target.value)}
        value={querryString}
        inputName="search"
      />
      <br />
      <Typography
        variant="subtitle1"
        gutterBottom
        mt={2}
        component="div"
        classes={{ root: classes.filter_date }}
      >
        Filter by date
      </Typography>
      <InputRangeDatePicker
        fromDate={fromDateQuerryString}
        toDate={toDateQuerryString}
        handleFromDate={(e) => setFromDateQuerryString(e.target.value)}
        handleToDate={(e) => setToDateQuerryString(e.target.value)}
        handleDateBlur={(e) => handleDateRangeValidations(e)}
        fromDateError={errorFromDate ? true : false}
        fromDateErrorText={
          errorFromDate
            ? "Please enter valid date. Date should not be empty or greater than 'to' date"
            : ""
        }
        toDateError={errorToDate ? true : false}
        toDateErrorText={
          errorToDate
            ? "Please enter valid date. Date should not be empty or less than or eqaul to 'from' date"
            : ""
        }
      />
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={(e) => handleClearSearch(e, originalData)}
        disabled={
          fromDateQuerryString === "" || toDateQuerryString === ""
            ? true
            : false
        }
      >
        Clear date filter
      </Button>

      <br />
      <br />
      {!isLoading ? (
        <List
          children={
            handleSearchThroughData(data).length > 0 ? (
              handleSearchThroughData(data).map((item, i) => (
                <div className="rTableRow" key={i}>
                  <div className="rTableCell">{item.item_name}</div>
                  <div className="rTableCell">
                    <a
                      href={item.store_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#336699" }}
                    >
                      {item.store_name}
                    </a>
                  </div>
                  <div className="rTableCell">
                    {moment(item.date_time).format(
                      "dddd, MMMM Do, YYYY, HH:MM:SS"
                    )}
                  </div>
                </div>
              ))
            ) : (
              <Typography
                style={{ fontWeight: 600, marginTop: "2em" }}
                color="secondary"
                align="center"
              >
                Sorry Could not find any data for your search.
              </Typography>
            )
          }
        />
      ) : (
        <Typography
          style={{ fontWeight: 600, marginTop: "2em" }}
          color="primary"
          align="center"
        >
          Loading...
        </Typography>
      )}
    </div>
  );
};

export default ShoppingListHistory;
