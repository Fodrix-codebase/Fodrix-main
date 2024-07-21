import React from "react";

import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="d-flex m-4">
        <img
          alt="img"
          className="img-fluid"
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          width="100px"
          height="40px"
        />{" "}
        <span className="mt-4 m-4">
          <strong className="usersname_dashboard">Hello Deepshikha!</strong>
        </span>
      </div>
      <hr class="hrline"></hr>
      <div className=" dashboard_users_components">
        <div class="container">
          <div class="row">
            <div class="col m-1">
              <h5>Name</h5>
            </div>
            <div class="col">Deepshikha</div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Email id</h5>
            </div>
            <div class="col"> deep@gmail.com</div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Mobile Number</h5>
            </div>
            <div class="col"> 986304786</div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Destination of shoot</h5>
            </div>
            <div class="col"> Chandrapur</div>
          </div>
          <div class="row">
            <div class="col m-1">
              {" "}
              <h5>Types of Event</h5>
            </div>
            <div class="col">
              {" "}
              <select name="destination" id="destination" className="w-75 p-2">
                <option value="travel">Travel</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <button className="search_dashboardcomponents ">Get a callback</button>
      </div>
    </>
  );
}
