import React, { useState } from 'react';
import "./App.css";

import TermsConditions from "./components/footer_components/TermsConditions";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import BookNow from "./components/bookashoot_components/BookNow";
import privacyPolicy from "./components/footer_components/PrivacyPolicy";
import CancPolicy from "./components/footer_components/CancPolicy";
import PhotographerLogin from "./components/login_components/PhotographerLogin";
import PhotoshootServices from "./components/homePage_components/PhotoshootServices";
import AddCityPage from "./components/CityHome_components/AddCityPage";

import PaymentForm from "./components/bookashoot_components/PaymentForm";
import OTPVerification from "./components/bookashoot_components/OTPVerification";
import CityHome from "./components/CityHome_components/CityHome";
import Career from "./components/footer_components/Career";
import BecomeFodrixographer from "./components/footer_components/BecomeFodrixographer";
import BecomePartner from "./components/footer_components/BecomePartner";
import ContactUs from "./components/footer_components/contactUs";
import Testinomials from "./components/testinomial_components/Testinomials";
import NewDashboard from "./components/New-Dashboard__components/NewDashboard";
import Navbar from "./components/Navbar";
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from "./components/Dashboard_components/Authentication/ProtectedRoute";
import Footer from "./components/footer_components/Footer";
import OfferAlert from "./mainUtils/OfferAlert";
import Portfolio from "./components/portfolio_components/Portfolio";
import Admin_view_partners from "./components/admin/Admin_view_partners";
import Admin_view_contacted from "./components/admin/Admin_view_contacted";
import Admin_view_career from "./components/admin/Admin_view_career";

import Admin_view_callback from "./components/admin/Admin_view_callback";
import Admin_login from "./components/admin/Admin_login";
import NewUserDashboard from "./components/Dashboard_components/NewUserDashboard";
import PackageModal from "./components/package_modal/PackageModal";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Admin_add_portfolio_images from "./components/admin/Admin_add_portfolio_images";
import Admin_add_photographer from "./components/admin/Admin_add_photographer";
import ForgotPassword from "./components/login_components/ForgotPassword";
import Admin_view_user from './components/admin/Admin_view_user';
import Admin_view_userbooking from './components/admin/Admin_view_userbooking';
import Admin_add_blog from './components/admin/Admin_add_blog';
import BlogList from './components/Blogs/BlogList';
import BlogDetail from './components/Blogs/BlogDetail';
import BackToTop from "./components/BackToTop";
import Whatsapp from "./components/Whatsapp";

// global.loggedIn = true;

function App() {
  const history = useHistory();
 

  return (
    <>
      <Whatsapp />
       <BackToTop />
      {history.location.pathname.includes("dashboard") ||
      history.location.pathname.includes("userDashboard") ? null : (
        <>
          {/* <OfferAlert /> */}
          <Navbar />

        </>
      )}

      <Switch>
        <Route exact path="/tNc" component={TermsConditions} />

        <Route exact path="/book" component={BookNow} />
        <Route exact path="/privacyPolicy" component={privacyPolicy} />
        <Route exact path="/cancellationPolicy" component={CancPolicy} />
        <Route exact path="/pLogin" component={PhotographerLogin} />
        <Route exact path="/Admin_add_portfolio_images" component={Admin_add_portfolio_images} />
        <Route exact path="/payment" component={PaymentForm} />
        <Route exact path="/AddCityPage" component={AddCityPage} />
        <Route path="/portfolio/:category" component={Portfolio} />
        <Route exact path="/OTP" component={OTPVerification} />
        <Route exact path="/Admin_view_partners" component={Admin_view_partners} />
        <Route exact path="/Admin_view_contacted" component={Admin_view_contacted} />
        <Route exact path="/Admin_view_career" component={Admin_view_career} />
        <Route exact path="/Admin_view_callback" component={Admin_view_callback} />
        <Route exact path="/Admin_login" component={Admin_login} />
        <Route exact path="/Admin_dashboard" component={Admin_dashboard} />
        <Route exact path="/Admin_view_user" component={Admin_view_user} />
        <Route path="/Admin_view_userbooking/:userId" component={Admin_view_userbooking} />
        <Route exact path="/Admin_add_photographer" component={Admin_add_photographer} />
        <Route exact path="/Admin_add_blog" component={Admin_add_blog} />

        <Route exact path="/ForgotPassword" component={ForgotPassword} />


        <Route exact path="/City_Home/:city" component={CityHome} />
        <Route
          exact
          path="/BecomeFodrixographer"
          component={BecomeFodrixographer}
        />
        <Route exact path="/Career" component={Career} />
       
        <Route exact path="/BecomePartner" component={BecomePartner} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/testimonial" component={Testinomials} />
        <Route exact path="/BlogList" component={BlogList} />
        <Route path="/blog/:id" component={BlogDetail} />

       <Route
          exact
          path="/photoshoot_services"
          component={PhotoshootServices}
        />
        <Route exact path="/dashboard/profile" component={NewDashboard} />
        <Route exact path="/book_package" component={PackageModal} />
        <Route
          exact
          path="/userdashboard"
          component={NewUserDashboard}
        ></Route>

<Route
  exact
  path="/dashboard" // Add ":userId" as a parameter
  component={NewDashboard}
/>

        
      </Switch>
      {history.location.pathname.includes("dashboard") ||
      history.location.pathname.includes("userDashboard") ? null : (
      

      <Footer />
      
      )}
    </>
  );
}

export default withRouter(App);
