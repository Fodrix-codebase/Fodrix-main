import React from "react";
import Images from "../All_Images/Images";
import "../css/NewNav.css";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Home from "./Home";
import HowitWorks from "./HowItWorks_components/HowItWorks";
import Portfolio from "./portfolio_components/Portfolio";
import Packages from "./packages_components/Packages";
import RequestBooking from "./Requestbooking_components/RequestBooking";
import AboutUs from "./aboutus_components/AboutUsNew";
import loginjs from "./login_components/loginjs";
import Login from "./login_components/Login";
import Faq from "./faqs_components/Faq";
import BookNow from "./bookashoot_components/BookNow";
import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins/navbar";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function NewNav() {

    // navToggler.addEventListener("click", navToggle);
    // const navToggler = document.querySelector(".nav-toggler");

    // const navToggle = () => {
    //     navToggler.classList.toggle("active");
    //     const nav = document.querySelector(".nav");
    //     nav.classList.toggle("open");
    //     if (nav.classList.contains("open")) {
    //         nav.style.maxHeight = nav.scrollHeight + "px";
    //     }
    //     else {
    //         nav.removeAttribute("style");
    //     }
    // }

    return (
        <>

            <div class="header">
                <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="logo">
                            <Link className="" to="/">
                                <img
                                    src={Images.fodrixiconnew}
                                    className="image"
                                    width="130px"
                                    height="71px"
                                    alt="Fodrix Logo"
                                    style={{ height: "57px", width: "100px" }}
                                />
                            </Link>
                        </div>
                        <button type="button" class="nav-toggler">
                            <span ></span>
                        </button>
                        <nav class="nav">
                            <ul>
                                <li>
                                    <Nav.Link>
                                        <Link className="colorr" to="/portfolio">
                                            Portfolio
                                        </Link>
                                    </Nav.Link></li>
                                <li>
                                    <Nav.Link>
                                        <Link className="colorr" to="/packages">
                                            Packages
                                        </Link>
                                    </Nav.Link></li>
                                <li>
                                    <Nav.Link>
                                        <Link className="colorr" to="/HowItWorks">
                                            How it Works
                                        </Link>
                                    </Nav.Link></li>
                                <li>
                                    <Nav.Link>
                                        <Link className="colorr" to="/about_us">
                                            AboutUs
                                        </Link>
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link>
                                        <Link className="colorr" to="/login" onClick={loginjs}>
                                            Login
                                        </Link>
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link>
                                        <Link className="ph_color" to="/number">
                                            <span class="fa fa-phone color mt-1">
                                                <span className="number ml-1">07020147576</span>
                                            </span>

                                            <button class="btnn">
                                                <a href="#" className="btnn_a">
                                                    Book a Shoot <i class="far fa-hand-pointer"></i>
                                                </a>
                                            </button>
                                        </Link>
                                    </Nav.Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/HowItWorks">
                    <HowitWorks />
                </Route>
                <Route exact path="/packages">
                    <Packages />
                </Route>
                <Route exact path="/requestBooking">
                    <RequestBooking />
                </Route>
                <Route exact path="/about_us">
                    <AboutUs />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/faq">
                    <Faq />
                </Route>
                <Route exact path="/booking">
                    <BookNow />
                </Route>
            </Switch>
        </>
    );
}
