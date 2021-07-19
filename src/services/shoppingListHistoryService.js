import axios from "axios";
import { SYSTEM_ERROR } from "../config/constants";
import { GET_SHOPPING_LIST_ITEMS } from "./constants";

export const getShoppingListItemsData = () => {
  console.log("shoppingListHistoryServive > getShoppingListItems called...");
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(GET_SHOPPING_LIST_ITEMS)
        .then((res) => {
          console.log("getShoppingListItemsData > axios res=", res);
          const shoppingListData = res.data;
          resolve(shoppingListData);
        })
        .catch((err) => {
          console.log("getShoppingListItemsData > axios err=", err);
          reject("Error in getShoppingListItems axios!");
        });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
