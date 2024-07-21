import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Images from "../All_Images/Images";


import "bootstrap/dist/css/bootstrap.min.css";
import "../plugins/navbar";

import "../css/Navbar.css";
import Temp from "./Temp";
import { connect } from "react-redux";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      loginlink: localStorage.getItem("auth"),
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.collapsMenu = this.collapsMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  collapsMenu() {
    this.setState({ menu: false });
  }

  bookAShootHandler() {
    this.props.bookAShoot();
  }

  handleMouseEnter = () => {
    this.setState({ isDropdownOpen: true });
  };

  handleMouseLeave = () => {
    this.setState({ isDropdownOpen: false });
  };
  
  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  
  render() {
    const show = this.state.menu ? "show" : "";

    const { isDropdownOpen } = this.state;

  
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          id="navbar"
        >
          <Link onClick={this.collapsMenu} className="navbar-brand" to="/">
            {" "}
            <img
              src={Images.fodrixiconnew}
              className="image"
              width="130px"
              height="71px"
              alt="Fodrix Logo"
              style={{ height: "57px", width: "100px" }}
            />{" "}
          </Link>{" "}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="navbar-toggler-icon"> </span>{" "}
          </button>{" "}
          <div id="collapse" className={"collapse navbar-collapse " + show}>
            <div id="right" className="navbar-nav bg-light">
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/photoshoot_services">
                Services
              </Link>{" "}
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/packages">
                {" "}
                Packages{" "}
              </Link>{" "}
              {/* <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/portfolio">
                {" "}
                Portfolio{" "}
              </Link>{" "} */}
          
        
        
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/HowItWorks">
                {" "}
                How it Works{" "}
              </Link>{" "}
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/about_us">
                {" "}
                AboutUs{" "}
              </Link>{" "}

    
              <div
            className={`nav-item nav-link dropdown   ${isDropdownOpen ? 'show' : ''}`}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <Link
              className=" nav-item nav-link dropdown-toggle "
              to=""
              role="button"
            >
              Portfolio
            </Link>
            {/* <div
              className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            > */}
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link className="dropdown-item" to="/portfolio/wedding">
                Wedding Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/pre-wedding">
                Pre-Wedding Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/post-wedding">
                Post-Wedding Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/baby">
                Baby Portfolios
              </Link>
              
              <Link className="dropdown-item" to="/portfolio/maternity">
                Maternity Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/travel">
                Travel Portfolios
              </Link>
              
              
              <Link className="dropdown-item" to="/portfolio/business">
                Business Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/personal">
                Personal Portfolios
              </Link>
              <Link className="dropdown-item" to="/portfolio/family">
                Family Portfolios
              </Link>
             
              <Link className="dropdown-item" to="/portfolio/other">
                Other Portfolios
              </Link>
            </div>
            {/* </div> */}
            </div>
          

              <Link
                onClick={this.collapsMenu}
                id="logout"
                className="nav-item nav-link"
                to={this.state.loginlink === "true" ? "/dashboard" : "/login"}
              >
                {this.state.loginlink === "true" ? "Dashboard" : "Login"}
              </Link>
              <a onClick={this.collapsMenu} className="nav-item nav-link" href="tel:07020147576">
                {" "}
                <i className="fas fa-phone-alt"></i>&nbsp;07020147576{" "}
              </a>
              <Link onClick={this.collapsMenu} className="nav-item nav-link" to="/login">
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={this.bookAShootHandler.bind(this)}
                >
                  {" "}
                  Book A Shoot <i className="fas fa-hand-point-up"> </i>{" "}
                </button>{" "}
              </Link>
            </div>{" "}
          </div>{" "}
        </nav>

        <Temp />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookAShoot: () => dispatch({ type: "bookAShoot" }),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
