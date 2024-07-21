import { createStore } from "redux";

const initialState = {
  Destination: "0",
  Package: "0",
  Date: "",
  Time: "",
};

const userDashboardReducer = (state = initialState, action) => {
  if (action.type === "bookAShoot") {
    return {
      Destination: "Agra",
      Package: "7999",
      Date: "",
      Time: "",
    };
  } else if (action.type === "packages") {
    return {
      Destination: "",
      Package: action.price,
      Date: "",
      Time: "",
    };
  } else if (action.type === "cityHome") {
    return {
      Destination: action.city,
      Package: "select",
      Date: action.date,
      Time: action.time,
    };
  }
  return state;
};

const store = createStore(userDashboardReducer);

export default store;
