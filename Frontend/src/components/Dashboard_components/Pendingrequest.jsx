import React from "react";
import { Link } from "react-router-dom";

import "./Pendingrequest.css";
import userData from "./userdata.json";
let my_shoot_apikey = process.env.REACT_APP_CITY_HOME;
let url = `${my_shoot_apikey}/user/clientRecord_pending/`;

var totalSum = 0;

export default class Pendingrequest extends React.Component {
  constructor() {
    super();
    this.state = {
      Data: userData,
      userEmail: localStorage.getItem("userEmail"),
    };
  }

  async componentDidMount() {
    let api = url + this.state.userEmail;
    let data = await fetch(api);
    let parseData = await data.json();
    // let myshootdata = await parseData.data;
    this.setState({
      Data: parseData,
    });
  }

  render() {
    return (
      <>
        <div class="main_container_pen">
          <div class="container_pen">
            <div class="right_check">
              <div class="book_head">
                <h1> Pending Orders </h1>{" "}
                <h1>
                  {" "}
                  <i class="fas fa-fast-forward"> </i>{" "}
                </h1>{" "}
              </div>{" "}
              <div class="booking_details booking_details_right">
                {this.state.Data.status ? (
                  this.state.Data.data.map((e) => {
                    return (
                      <>
                        <div class="order">
                          <h4 class="fade_ch"> {e.location} </h4>{" "}
                          {/* <h4 class="fade_ch"> {e.c_package} </h4>{" "} */}
                          {/* <h4 class="color"> &#8377; {e.package_price} </h4> */}
                          <h4 class="color"> &#8377; {e.c_package} </h4>
                        </div>
                        <div class="package_btn">
                          <a
                            href="/userdashboard"
                            type="btn"
                            class="package_btn-style"
                          >
                            Change
                          </a>
                          <a
                            class="package_btn-style"
                            type="btn"
                            onClick={() => {
                              console.log("Delete button handle");
                            }}
                          >
                            Delete
                          </a>
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
                      marginTop: "10vh",
                    }}
                  >
                    {" "}
                    no request pending!
                  </h1>
                )}
              </div>{" "}
              <div class="total">
                <h4 class="fade_ch"> Total </h4> <br />{" "}
                {this.state.Data.status &&
                  this.state.Data.data.map((e) => {
                    // totalSum += parseInt(e.package_price);
                    totalSum += parseInt(e.c_package);
                  })}
                <h4 class="color"> &#8377; {totalSum} </h4>
              </div>{" "}
              <div class="pay">
                <Link to="/userdashboard">
                  <button class="checkout_btn">
                    {" "}
                    Pay &nbsp; &#8377; {totalSum}{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
