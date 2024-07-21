import React, { useState, useEffect } from "react";
import "./City_Home.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import PackageModal from "../package_modal/PackageModal";

import "bootstrap/dist/css/bootstrap.min.css";
import CallbackPopup from "../../mainUtils/CallbackPopup";
import FeaturedPhotographer from "./FeaturedPhotographer";

const CityHome = () => {
  let apiKey = process.env.REACT_APP_CITY_HOME;
  const history = useHistory();

  const city = localStorage.getItem("city");
  const [cityDetails, setCityDetails] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  const getCityDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/cities/${city}`);
      const data = await response.json();
      if (response.status === 404) {
        swal("Please enter a valid city");
        history.push("/");
      } else {
        setCityDetails(data);
      }
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false on error as well
    }
  };

  useEffect(() => {
    getCityDetails();
  }, []);

  return (
    <>
      {displayModal && (
        <PackageModal setDisplayModal={setDisplayModal} city={city} />
      )}
      {loading ? ( // Render loading spinner if loading is true
        <div>Loading...</div>
      ) : cityDetails ? (
        <div className="bordered">
          <div className="card_body">
            <h1> Welcome to {cityDetails.name} </h1>
            <div className="card-description">{cityDetails.about}</div>
          </div>
          <div className="img_random">
            <div className="img_body">
              <img
                loading="lazy"
                className="image"
                src={cityDetails.image[0]}
                alt="not found"
              />
            </div>
          </div>
        </div>
      ) : null}
      {cityDetails && (
        <div className="second_row">
          <div className="card touristSpots">
            <div className="body_touristSpots">
              <h1>Tourist Spots</h1>
              <ul className="tourist_spots" id="tourist_spots_ul">
                {cityDetails.touristSpots.map((spot, index) => (
                  <li key={index} id="tourist_spots_li">
                    {spot}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="map">
            <iframe
              src={cityDetails.mapLink}
              className="map_frame"
              title="map"
            ></iframe>
          </div>
        </div>
      )}
      <div className="featuredPhotographer-cityHome__container">
      <FeaturedPhotographer city={city} />
      </div>
      <CallbackPopup popup={true} callBackForm={true} />
      <div className="third-row">
        <h1 className="heading-thirdCity">Request your photographer</h1>
      </div>
      {/* <button id="request_booking_btn" onClick={() => setDisplayModal(true)}> */}
    <Link to ="/login"> <button id="request_booking_btn" >
        Request Booking
      </button></Link>
    </>
  );
};

export default CityHome;
