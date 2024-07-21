import React from "react";
import "./bookNow.css";
import { Link } from "react-router-dom";

import Bookingclient from "./Bookingclient";

export default function BookNow() {
  return (
    <>
      <div className="container booknow_component_css">
        <div className="row">
          <div className="col-lg-6 col-md-6 d-none d-md-block img_booknow">
            {/* <img src={Illustration} /> */}
          </div>

          <div className="col-lg-6 col-md-6 form-container">
            <div className="col-lg-8 col-md-12 col-sm-9 col-xs-12 bookNowcomponent text-center">
              <div className="logo ">
                <img
                  loading="lazy"
                  alt="img"
                  src="fodrix-icon.png"
                  width="150px"
                />
              </div>
              <div className="heading mb-4">
                <h4>Customer Details</h4>
              </div>
              <form>
                <div className="form-input">
                  <span>
                    <i className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="c_name"
                  />
                </div>
                <div className="form-input">
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    id="c_email"
                  />
                </div>
                <div className="form-input">
                  <span>
                    <i class="fas fa-phone-alt"></i>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="c_mobile"
                  />
                </div>
                <div className="form-input">
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                  </span>
                  <input
                    type="location"
                    name="location"
                    placeholder="Your Location"
                    id="c_location"
                  />
                </div>
                <div className="form-input">
                  <span>
                    <i class="fas fa-calendar-day"></i>
                  </span>
                  <input
                    type="Date"
                    name="date"
                    placeholder="DD/MM/YY"
                    id="c_date"
                  />
                </div>

                <div className="text-left mb-3">
                  <a href="/packages_book">
                    <button
                      className="next "
                      style={{ width: "150px" }}
                      id="cbookingnow"
                      onClick={Bookingclient}
                      type="submit"
                    >
                      <Link to="/packages_book">Next</Link>
                    </button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
