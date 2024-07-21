import React from "react";
import styles from "./DashboardNav.module.css";
import Images from "../../All_Images/Images";
import { Link, useHistory } from "react-router-dom";
import { CgClose } from "react-icons/cg";

const DashboardNav = (props) => {
  const isPhotographer = localStorage.getItem("isPhotographer");
  const history = useHistory();
  const logoutDashboardHandler = () => {
    localStorage.clear();
    localStorage.removeItem("auth");
    history.push("/");
  };
  const DashboardDisplayHandler = () => {
    props.closeHandler(true);
  };
  let classes = styles["DashboardNav-container"];
  if (props.sideNavDisplay === true) {
    classes = `${styles["DashboardNav-container"]}  ${styles["DashboardNavDisplay"]}`;
  } else
    classes = `${styles["DashboardNav-container"]}  ${styles["hamburgerNavDisplay"]}`;
  return (
    <div className={classes}>
      <div className={styles["DashboardNav-close_icon"]}>
        <CgClose
          onClick={() => props.menuDisplayHandler(false)}
          className={styles["closeMenu-btn"]}
        />
      </div>
      <div className={styles["DashboardNav-header__container"]}>
        <div className={styles["DashboardNav-logo"]}>
          <Link to="/">
            <img
              src={Images.fodrixiconnew}
              alt="Fodrix"
              width="130px"
              height="71px"
            />
          </Link>
        </div>
        <div className={styles["DashboardNav-UserInfo"]}>
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt="Fodrix"
            width="45px"
            height="45px"
            style={{ borderRadius: "50%" }}
          />
          <span>{localStorage.getItem("userFirstName")}</span>
        </div>
      </div>
      <div className={styles["DashboardNav-route__container"]}>
        {!isPhotographer && (
          <Link className={styles["DashboardNav-route"]} to="/dashboard">
            <i className="fas fa-camera"></i>
            <p>Bookings</p>
          </Link>
        )}
        <Link className={styles["DashboardNav-route"]} to="/dashboard/profile">
          <i className="fas fa-user"> </i>
          <p>Profile</p>
        </Link>
        {isPhotographer && (
          <Link className={styles["DashboardNav-route"]} to="/dashboard">
            <i class="fa fa-solid fa-envelope"></i>
            <p>Leads</p>
          </Link>
        )}
        <div
          className={styles["DashboardNav-route"] + " " + styles["logout-btn"]}
          onClick={logoutDashboardHandler}
        >
          <i class="fas fa-sign-out-alt" style={{ color: "#007bff" }}></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
