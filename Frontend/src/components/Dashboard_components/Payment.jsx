import React from "react";
import "./DashboardComponent.css";
import userdata from "./userdata.json";
let my_shoot_apikey = process.env.REACT_APP_CITY_HOME;
let url = `${my_shoot_apikey}/user/clientRecord_success/`;
export default class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: userdata,
      userEmail: localStorage.getItem("userEmail"),
    };
  }
  async componentDidMount() {
    let api = url + this.state.userEmail;
    let data = await fetch(api);
    let parseData = await data.json();
    // console.log(parseData);
    // let myshootdata = await parseData.data;
    this.setState({
      Data: parseData,
    });
  }

  render() {
    return (
      <>
        <div class="main_container_pay">
          <div class="container_pay">
            {" "}
            {this.state.Data.status ? (
              this.state.Data.data.map((data) => {
                return (
                  <>
                    <div class="left_booking">
                      <div class="book_head">
                        <button>
                          <i class="fas fa-backward"> </i>{" "}
                        </button>{" "}
                        <h1> Booking Summary </h1>{" "}
                      </div>{" "}
                      <div class="booking_details">
                        <h4> Package </h4>{" "}
                        <h3> {!data.c_package ? "-" : data.c_package} </h3>{" "}
                        <h4> Package - Price </h4>{" "}
                        <h3>
                          {" "}
                          {!data.package_price ? "-" : data.package_price}{" "}
                        </h3>{" "}
                        <h4> Date & Time </h4>{" "}
                        <h3>
                          {" "}
                          {!data.time ? "-" : data.time},{" "}
                          {!data.date ? "-" : data.date}{" "}
                        </h3>{" "}
                        <h4> Address </h4>{" "}
                        <h3> {!data.location ? "-" : data.location} </h3>{" "}
                        <div class="user_details">
                          <div class="user_email">
                            <h4> Email Address </h4>{" "}
                            <h3> {!data.c_email ? "-" : data.c_email} </h3>{" "}
                          </div>{" "}
                          <div class="user_name">
                            <h4> Your name </h4>{" "}
                            <h3> {!data.c_name ? "-" : data.c_name} </h3>{" "}
                          </div>{" "}
                          <div class="user_phone">
                            <h4> Phone Number </h4>{" "}
                            <h3> {!data.c_mobile ? "-" : data.c_mobile} </h3>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </>
                );
              })
            ) : (
              <h1
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "40vh",
                }}
              >
                {" "}
                booking summary not available!
              </h1>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}
