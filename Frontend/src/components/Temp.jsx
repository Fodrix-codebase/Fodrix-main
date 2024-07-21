import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import HowitWorks from "./HowItWorks_components/HowItWorks";
import Portfolio from "./portfolio_components/Portfolio";
import Packages from "./packages_components/Packages";
import RequestBooking from "./Requestbooking_components/RequestBooking";
import AboutUsNew from "./aboutus_components/AboutUsNew";
import loginjs from "./login_components/loginjs";
import Login from "./login_components/Login";
import Faq from "./faqs_components/Faq";
import BookNow from "./bookashoot_components/BookNow";
const Temp = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>{" "}
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>{" "}
        <Route exact path="/HowItWorks">
          <HowitWorks />
        </Route>{" "}
        <Route exact path="/packages">
          <Packages />
        </Route>{" "}
        {/* <ProtectedRoute
            exact
            path="/bookashoot"
            component={Dashboard}
          ></ProtectedRoute> */}
        <Route exact path="/about_us">
          <AboutUsNew />
        </Route>{" "}
        <Route exact path="/login">
          <Login />
        </Route>{" "}
        <Route exact path="/faq" component={Faq} />
        {/* <Faq />
        </Route> */}
        <Route exact path="/booking">
          <BookNow />
        </Route>{" "}
      </Switch>
    </div>
  );
};

export default Temp;
