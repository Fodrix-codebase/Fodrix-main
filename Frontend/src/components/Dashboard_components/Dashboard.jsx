import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { Moveleft, Moveright } from "../Dashboard_components/animate";

import Dashboardimageload from "./Dashboardimageload";
import "./dashboard.css";
import Myshoot from "./Myshoot";
import Payment from "./Payment";
import Pendingrequest from "./Pendingrequest";
import Whatsapp from "../Whatsapp";
// function logout() {
//   global.loggeduserlogged = false;
// }
function dashboard(props) {
  // useEffect(() => {
  //   const title = document.querySelector("title");
  //   title.innerText = `Dashboard | Fodrix`;
  // }, []);
  return (
    <>
      <Whatsapp />
      <div id="dashboard-left">
        <i onClick={Moveleft} id="icon-left" className="fas fa-chevron-left">
          {" "}
        </i>{" "}
        <i onClick={Moveright} id="icon-right" className="fas fa-chevron-right">
          {" "}
        </i>{" "}
        <div id="dashboard-left_nav">
          <a href="#booking">
            {" "}
            <i class="fas fa-user"> </i>&nbsp;Profile{" "}
          </a>{" "}
          <a href="#myshoot">
            {" "}
            <i class="far fa-chart-bar"> </i>&nbsp;MyShoots{" "}
          </a>{" "}
          <a href="#pendingrequest">
            <i class="fab fa-amazon-pay"> </i>&nbsp; Pending Requests{" "}
          </a>{" "}
          <a href="#bookings">
            <i class="fas fa-bookmark"> </i>&nbsp; Bookings{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
      <div id="dashboard-content">
        <div id="dashboard-content_profile_user">
          <div id="booking">
            <div id="dashboard-content_profile">
              <Dashboardimageload />
            </div>{" "}
            <a
              href="/"
              onClick={function logout() {
                localStorage.clear();
                localStorage.removeItem("auth");
              }}
            >
              <button id="logout-button" className="btn btn-primary">
                LogOut
              </button>
            </a>
            <hr id="profile-hr" />
            <div id="booking-user-history">
              <div id="booking-user-history_img">
                <img
                  alt="dashboardimage"
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
              </div>{" "}
              <div id="booking-user-history_text">
                <div id="text_container">
                  <h1>
                    fodrix at your service! <br />
                  </h1>{" "}
                  <p> continue by searching your destination</p>
                  <Link to="/#toppage">
                    <button id="booking-btn" className="btn btn-primary">
                      search your destination{" "}
                    </button>{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div id="myshoot">
          <Myshoot />
        </div>{" "}
        <div id="pendingrequest">
          <h1 id="payment-head"> Pendings Requests </h1> <Pendingrequest />
        </div>{" "}
        <div id="bookings">
          <h1 id="payment_head"> Booking Summary </h1>

          <Payment />
        </div>{" "}
      </div>{" "}
    </>
  );
}

// export default withRouter(dashboard);
export default dashboard;
