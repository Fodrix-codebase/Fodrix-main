import React from "react";
import styles from "./DashboardProfile.module.css";
import ProfilePersonalDetails from "./ProfilePersonalDetails";
import UserAddress from "./UserAddress";
import UserPassword from "./UserPassword";
import { CgMenu } from "react-icons/cg";

const DashboardProfile = (props) => {
  return (
    <>
      <div className={styles["NewDashboard-Body__container"]}>
        <div className={styles["NewDashboard-header"]}>
          <CgMenu className={styles["menu-btn"]} onClick={() => props.menuDisplayHandler(true)} />
          <h1 className={styles["dashboard-heading"]}>Profile</h1>
        </div>
        <div className={styles["NewDashboard-booking__route"]}>
          <h5>Account settings</h5>
        </div>
        <div className={styles["NewDashboard-photoshootCard"]}>
          <ProfilePersonalDetails />
          <div className={styles["NewDashboard-photoshootCard__section2"]}>
            <UserAddress />
            <UserPassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardProfile;
