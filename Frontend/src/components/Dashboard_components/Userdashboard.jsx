import React, { useEffect, useState } from "react";
import paymentStart from "../bookashoot_components/payment";
import { useHistory } from "react-router";
import Dashboardimageload from "./Dashboardimageload";

import "./dashboard.css";
import { useSelector } from "react-redux";

const Userdashboard = () => {
  const Destination = useSelector((state) => state.Destination);
  const Package = useSelector((state) => state.Package);
  const Date = useSelector((state) => state.Date);
  const Time = useSelector((state) => state.Time);

  // const firstname = localStorage.getItem("first_name");
  // const email = localStorage.getItem("email");
  // const mobile = localStorage.getItem("mobile");
  // const city = localStorage.getItem("city");
  // const date = localStorage.getItem("bookingdate");
  // const time = localStorage.getItem("bookingtime");
  const history = useHistory();
  function logOutbtn() {
    localStorage.clear();
    localStorage.removeItem("auth");
    history.push("/login");
  }

  function others() {
    window.location = "/photoshoot_services";
  }
  const [photoshootPackage, setPhotoshootPackage] = useState();

  const packageChangeHandler = (e) => {
    setPhotoshootPackage(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("c_package", photoshootPackage);
  }, [photoshootPackage]);
  return (
    <>
      <div className="d-flex m-4">
        <Dashboardimageload />

        <a href="/">
          {" "}
          <button onClick={logOutbtn} className="logoutbtn">
            logout
          </button>
        </a>
        {/* <Link to="/">
          <button className="logoutbtn" style={{ marginLeft: "250px" }}>
            Home
          </button>
        </Link> */}

        {/* <span className="mt-5 mr-5">
          <strong className="usersname_dashboard">Hello {firstname}!</strong>
        </span> */}
      </div>

      <hr class="hrline"></hr>
      <div className=" dashboard_users_components">
        <div class="container">
          <div class="row">
            <div class="col m-1">
              <h5>Name</h5>
            </div>
            <div class="col">{localStorage.getItem("userFirstName")}</div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Email id</h5>
            </div>
            <div class="col"> {localStorage.getItem("userEmail")} </div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Mobile Number</h5>
            </div>
            <div class="col"> {localStorage.getItem("userMobile")}</div>
          </div>
          <div class="row">
            <div class="col m-1">
              <h5>Destination of shoot</h5>
            </div>
            <div class="col">
              {/* {city} */}
              <select
                name="city"
                // id={styles["photoshoot-city"]}
                defaultValue={Destination}
                required
              >
                <option value="0">Choose City</option>
                <option value="Agartala"> Agartala </option>
                <option value="Agra"> Agra </option>
                <option value="Ahemadabad"> Ahemadabad </option>
                <option value="Aizawl"> Aizawl </option>
                <option value="Ajmer"> Ajmer </option>
                <option value="Almora"> Almora </option>
                <option value="Amaravati"> Amaravati </option>
                <option value="Ambala"> Ambala </option>
                <option value="Amritsar"> Amritsar </option>
                <option value="Aurangabad"> Aurangabad </option>
                <option value="Ayodhya"> Ayodhya </option>
                <option value="Badrinath"> Badrinath </option>
                <option value="Bangalore"> Bangalore </option>
                <option value="Bhopal"> Bhopal </option>
                <option value="Bhubaneshwar"> Bhubaneshwar </option>
                <option value="Bikaner"> Bikaner </option>
                <option value="Bilaspur"> Bilaspur </option>
                <option value="Bodhgaya"> Bodhgaya </option>
                <option value="Calangute, Goa"> Calangute, Goa </option>
                <option value="Canacona, Goa"> Canacona, Goa </option>
                <option value="Chandigarh"> Chandigarh </option>
                <option value="Chennai"> Chennai </option>
                <option value="Chittoor"> Chittoor </option>
                <option value="Coimbatore"> Coimbatore </option>
                <option value="Dalhousie"> Dalhousie </option>
                <option value="Daman"> Daman </option>
                <option value="Darjeeling"> Darjeeling </option>
                <option value="Dehradun"> Dehradun </option>
                <option value="Delhi"> Delhi </option>
                <option value="Dharamshala"> Dharamshala </option>
                <option value="Dwarka"> Dwarka </option>
                <option value="Fatehpur Sikri"> Fatehpur Sikri </option>
                <option value="Gandhinagar"> Gandhinagar </option>
                <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>
                <option value="Gurgaon"> Gurgaon </option>
                <option value="Guwahati"> Guwahati </option>
                <option value="Gwalior"> Gwalior </option>
                <option value="Hampi"> Hampi </option>
                <option value="Haridwar"> Haridwar </option>
                <option value="Hyderabad"> Hyderabad </option>
                <option value="Imphal"> Imphal </option>
                <option value="Indore"> Indore </option>
                <option value="Itanagar"> Itanagar </option>
                <option value="Jabalpur"> Jabalpur </option>
                <option value="Jaipur"> Jaipur </option>
                <option value="Jaisalmer"> Jaisalmer </option>
                <option value="Jammu"> Jammu </option>
                <option value="Jhansi"> Jhansi </option>
                <option value="Jodhpur"> Jodhpur </option>
                <option value="Junagadh"> Junagadh </option>
                <option value="Kanpur"> Kanpur </option>
                <option value="Kasauli"> Kasauli </option>
                <option value="Kavaratti"> Kavaratti </option>
                <option value="Kedarnath"> Kedarnath </option>
                <option value="Kohima"> Kohima </option>
                <option value="Kolkata"> Kolkata </option>
                <option value="Kufri"> Kufri </option>
                <option value="Kullu"> Kullu </option>
                <option value="Leh"> Leh </option>
                <option value="Lucknow"> Lucknow </option>
                <option value="Madurai"> Madurai </option>
                <option value="Manali"> Manali </option>
                <option value="Mangalore"> Mangalore </option>
                <option value="Mathura"> Mathura </option>
                <option value="Mumbai"> Mumbai </option>
                <option value="Mussorie"> Mussorie </option>
                <option value="Mysore"> Mysore </option>
                <option value="Nagpur"> Nagpur </option>
                <option value="Nainital"> Nainital </option>
                <option value="Nashik"> Nashik </option>
                <option value="Ooty"> Ooty </option>
                <option value="Panaji, Goa"> Panaji, Goa </option>
                <option value="Patna, Bihar"> Patna, Bihar </option>
                <option value="Portblair"> Portblair </option>
                <option value="Prayagraj"> Prayagraj </option>
                <option value="Puducherry"> Puducherry </option>
                <option value="Pune"> Pune </option>
                <option value="Puri"> Puri </option>
                <option value="Raipur"> Raipur </option>
                <option value="Ranchi"> Ranchi </option>
                <option value="Raurkela"> Raurkela </option>
                <option value="Rishikesh"> Rishikesh </option>
                <option value="Rohtak"> Rohtak </option>
                <option value="Shillong"> Shillong </option>
                <option value="Shimla"> Shimla </option>
                <option value="Silchar"> Silchar </option>
                <option value="Silliguri"> Silliguri </option>
                <option value="Sonipat"> Sonipat </option>
                <option value="Surat"> Surat </option>
                <option value="Tawang"> Tawang </option>
                <option value="Thiruvananthpuram"> Thiruvananthpuram </option>
                <option value="Tirupati"> Tirupati </option>
                <option value="Udaipur"> Udaipur </option>
                <option value="Vadodara"> Vadodara </option>
                <option value="Varanasi"> Varanasi </option>
                <option value="Vijayawada"> Vijayawada </option>
                <option value="Visakhapatnam"> Visakhapatnam </option>
                <option value="Vrindavan"> Vrindavan </option>
                <option value="Warangal"> Warangal </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              {" "}
              <h5>Types of Event</h5>
            </div>
            <div class="col">
              {" "}
              {/* <select
                name="destination"
                id="destination"
                className="w-75 p-2 m-1"
                // onChange="window.location.href= this.form.URL.options[this.form.URL.selectedIndex].value"
                defaultValue={EventType}
              >
                <option value="0">Choose Event</option>
                <option value="travel">Travel</option>
                <option value="wedding">Wedding</option>
                <option value="business">Business</option>
                <option value="preWedding">Pre-Wedding</option>
                <option value="baby">Baby</option>
                <option value="maternity">Maternity</option>
              </select> */}
              Travel
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              {" "}
              <h5>Package</h5>
            </div>

            <div class="col">
              {" "}
              <select
                name="package"
                id="package"
                // onChange={packageChangeHandler}
                defaultValue={Package}
                className="w-75 p-2 m-1"
                required
              >
                <option value="select">Select a package</option>
                <option value="3999">1 Hour 3999/-</option>
                <option value="5999">2 Hours 5999/-</option>
                <option value="7999">3 Hours 7999/-</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              {" "}
              <h5>Date</h5>
            </div>
            <div class="col ">
              {" "}
              {/* {date} {time} */}
              <input type="date" defaultValue={Date} required />
            </div>
          </div>
          <div class="row">
            <div class="col m-1">
              {" "}
              <h5>Time</h5>
            </div>
            <div class="col ">
              {" "}
              {/* {date} {time} */}
              <select defaultValue={Time}>
                <option value="0">Select your time slot</option>
                <option value="6">06:00am</option>
                <option value="7">07:00am</option>
                <option value="8">08:00am</option>
                <option value="9">09:00am</option>
                <option value="10">10:00am</option>
                <option value="11">11:00am</option>
                <option value="12">12:00pm</option>
                <option value="13">1:00pm</option>
                <option value="14">2:00pm</option>
                <option value="15">3:00pm</option>
                <option value="16">4:00pm</option>
                <option value="17">5:00pm</option>
                <option value="18">6:00pm</option>
                <option value="19">7:00pm</option>
                <option value="20">8:00pm</option>
              </select>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center " style={{ padding: "20px", margin: "20px" }}>
        <button
          className="search_dashboardcomponents "
          id="paymentbtndashboard"
          onClick={paymentStart}
        >
          Proceed to Pay
        </button>
      </div>
    </>
  );
};
export default Userdashboard;
