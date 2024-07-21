import React from "react";
import "./dashboard.css";
import Dashboardimageload from "./Dashboardimageload";

export default function Userprofile() {
    return ( <
        >
        <
        div id = "dashboard-content_profile_user" >
        <
        div id = "booking" >
        <
        div id = "dashboard-content_profile" >
        <
        Dashboardimageload / >
        <
        /div>{" "} <
        div id = "booking-user-history" >
        <
        h1 > you have not book anything yet! < /h1>{" "} <
        button id = "booking-btn"
        className = "btn btn-primary" >
        Search destination { " " } <
        /button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
}