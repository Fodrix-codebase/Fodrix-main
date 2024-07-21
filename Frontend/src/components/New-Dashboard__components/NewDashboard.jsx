import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter, useHistory } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import DashboardBooking from "./DashboardBooking";
import DashboardNav from "./DashboardNav";
import DashboardProfile from "./DashboardProfile";
import DashboardLeads from "./DashboardLeads";
import styles from "./NewDashboard.module.css";
import Images from "../../All_Images/Images";

const NewDashboard = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const history = useHistory();
  const pathArray = history.location.pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];
  const isPhotographer = localStorage.getItem("isPhotographer");
  const token = localStorage.getItem("token"); // Get the token from local storage

  // Function to include the bearer token in the request headers
  const getAuthHeaders = () => {
    return {
      Authorization: `Bearer ${token}`,
    };
  };

  const menuDisplayHandler = (val) => {
    setMenuDisplay(val);
  };

  return (
    <div className={styles["NewDashboard-container"]}>
      {menuDisplay && (
        <DashboardNav
          menuDisplayHandler={menuDisplayHandler}
          sideNavDisplay={false}
        />
      )}

      <DashboardNav
        menuDisplayHandler={menuDisplayHandler}
        sideNavDisplay={true}
      />

      {currentPath == "dashboard" ? (
        isPhotographer ? (
          <DashboardLeads menuDisplayHandler={menuDisplayHandler} />
        ) : (
          <DashboardBooking menuDisplayHandler={menuDisplayHandler} />
        )
      ) : (
        <DashboardProfile menuDisplayHandler={menuDisplayHandler} />
      )}
    </div>
  );
};

export default NewDashboard;
