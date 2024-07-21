import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { render } from "react-router-dom";
import swal from "sweetalert";

// var navlog = window.localStorage.getItem("isAuth");
var isAuth = localStorage.getItem("auth");
// console.log(navlog);

//global.loggedIn === true || global.loggeduserlogged === true

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {

        if (
          global.loggedIn === true &&
          localStorage.getItem("auth") === "true"
        ) {
          console.log("we are in if");
          console.log(isAuth + "logged in " + global.loggedIn);
          return <Component />;
        } else {
          swal("you need to login first!");
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
