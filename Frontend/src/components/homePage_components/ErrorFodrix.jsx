import React from "react";
import { NavLink } from "react-router-dom";
function ErrorFodrix() {
  return (
    <>
      <div className="error_fodrix text-center m-5 mt-5 p-5 ">
        <h1>404 Error Page</h1>
        <p>Sorry ! This page doesn't exist</p>
        <NavLink to="/" class="btn btn-outline-primary">
          {" "}
          GO BACK
        </NavLink>
      </div>
    </>
  );
}
export default ErrorFodrix;
