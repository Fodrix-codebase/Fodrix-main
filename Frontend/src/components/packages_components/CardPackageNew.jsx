import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../HowItWorks_components/how.css";
import "./packages.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function CardsPackage(props) {
  const dispatch = useDispatch();
  const package1Handler = () => {
    dispatch({ type: "packages", price: "3999" });
  };
  const package2Handler = () => {
    dispatch({ type: "packages", price: "5999" });
  };
  const package3Handler = () => {
    dispatch({ type: "packages", price: "7999" });
  };

  const { feature1, feature2, feature3 } = props.package_object;
  const packObj = props.package_object;
  // console.log(props.package_object)
  return (
    <>
      {/* <h1 className="package_heading h1 text-center p-2">{props.title} Packages</h1> */}
      <div class="packages_code">
        <div class="wrapper packacge_card_wrapper">
          <div
            class="table basic"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div class="package-name"></div>
            <ul class="features">
              <li className="sticky-top">
                <div class=" heading">{packObj.heading1}</div>
              </li>
              {feature1.map((feature) => {
                return (
                  <li>
                    <div class="list-name">{feature}</div>
                    <hr className="line"></hr>
                  </li>
                );
              })}
              <li>
                <div class="list-name">Rs. {packObj.price1}/-</div>
                <hr className="line"></hr>
              </li>
            </ul>
            <div class="btn">
              <Link to="/login">
                <button onClick={package1Handler}>Request Booking</button>
              </Link>
            </div>
          </div>

          <div
            class="table premium"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <ul class="features">
              <li className="sticky-top">
                <div class="heading premiumheading">{packObj.heading2}</div>
              </li>
              {feature2.map((feature) => {
                return (
                  <li>
                    <div class="list-name">{feature}</div>
                    <hr className="line"></hr>
                  </li>
                );
              })}
              <li>
                <div class="list-name_two">Rs. {packObj.price2}/-</div>
                <hr className="hr_two"></hr>
              </li>
            </ul>

            <div class="btn">
              <Link to="/login">
                <button onClick={package2Handler}>Request Booking</button>
              </Link>
            </div>
          </div>
          <div
            class="table ultimate"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <ul class="features">
              <li className="sticky-top">
                <div class="heading">{packObj.heading3}</div>
              </li>
              {feature3.map((feature) => {
                return (
                  <li>
                    <div class="list-name">{feature}</div>
                    <hr className="line"></hr>
                  </li>
                );
              })}
              <li>
                <div class="list-name">Rs. {packObj.price3}/-</div>
                <hr className="line"></hr>
              </li>
            </ul>
            <div class="btn">
              <Link to="/login">
                <button onClick={package3Handler}>Request booking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
