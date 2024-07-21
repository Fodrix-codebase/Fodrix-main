import React from "react";
import "./DashboardComponent.css";
import userdata from "./userdata.json";
// import { peruserEmail } from "../login_components/Login";
let my_shoot_apikey = process.env.REACT_APP_CITY_HOME;
let url = `${my_shoot_apikey}/user/clientRecord_success/`;

// console.log(global.peruserEmail);
export default class Myshoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: userdata,
      userEmail: localStorage.getItem("userEmail"),
    };
  }

  async componentDidMount() {
    try {
      let api = url + this.state.userEmail;
      let data = await fetch(api);
      let parseData = await data.json();
      // console.log(parseData);
      // let myshootdata = await parseData.data;
      this.setState({
        Data: parseData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <div class="head_shoot">
          <h1> My Shoots </h1>{" "}
        </div>{" "}
        {this.state.Data.status ? (
          this.state.Data.data.map((data) => {
            return (
              <>
                <div class="container_shoot">
                  <div class="shoots">
                    <div class="shoot_place">
                      <h3> {!data.location ? "-" : data.location} </h3>{" "}
                    </div>{" "}
                    <div class="shoot_details">
                      <div class="shoot_msg">
                        <h4> {!data.date ? "-" : data.date} </h4>{" "}
                      </div>{" "}
                      <div class="ph_details">
                        {" "}
                        {!data.time ? "-" : data.time}{" "}
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
            no shoot booked yet!
          </h1>
        )}{" "}
      </>
    );
  }
}
