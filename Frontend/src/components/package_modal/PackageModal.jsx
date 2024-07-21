import React, { useState, useEffect } from "react";
import "./packageModal.css";
import Images from "../../All_Images/Images";
import loginjs from "../login_components/loginjs";
import { MdClose } from "react-icons/md";
import { packages } from "../packages_components/PackageData";
import paymentStart from "../bookashoot_components/new_payment";

const PackageModal = (props) => {
  let fname = "";
  let lname = "";
  let userMobile = "";
  let userEmail = "";
  let auth = localStorage.getItem("auth");
  if (auth) {
    fname = localStorage.getItem("userFirstName");
    lname = localStorage.getItem("userLastName");
    userMobile = localStorage.getItem("userMobile");
    userEmail = localStorage.getItem("userEmail");
  }

  const [firstname, setFirstname] = useState(fname);
  const [email, setEmail] = useState(userEmail);
  const [lastname, setLastname] = useState(lname);
  const [mobile, setMobile] = useState(userMobile);
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedPackage, setPackage] = useState("");
  const [bookedPackagePrice, setPackagePrice] = useState("");
  const [comment, setComment] = useState("");
  const [coupon, setCoupon] = useState("");
  const [gold, setGold] = useState(" - ");
  const [silver, setSilver] = useState(" - ");
  const [bronze, setBronze] = useState(" - ");

  const closeBookingModal = () => {
    props.setDisplayModal(false);
  };
  const serviceHandler = () => {
    
    // Setting field which may pre fetched as default like name, email, mobile, city, service, package etc.
    // From /photoshoot_services page.
    // From //City_Home page.
    setCity(document.getElementById("booked-city").value);
    // From localStorage if user is authorized page.
    setFirstname(document.getElementById("first_name").value);
    setLastname(document.getElementById("last_name").value);
    setMobile(document.getElementById("mobile_register").value);
    setEmail(document.getElementById("email_register").value);

    packages.find((pack) => {
      if (pack.title === service) {
        setGold(pack.price3);
        setSilver(pack.price2);
        setBronze(pack.price1);
      }
    });
  };

  const BookPackageHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingdate", date);
    localStorage.setItem("bookingtime", time);
    localStorage.setItem("c_package", bookedPackage);
    localStorage.setItem("package_price", bookedPackagePrice);
    localStorage.setItem("first_name", firstname);
    localStorage.setItem("last_name", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("city", city);
    localStorage.setItem("service", service);
    paymentStart();
  };

  useEffect(() => {
    serviceHandler();
  }, [service]);
  useEffect(() => {
    setService(props.service)
    serviceHandler();
  }, []);

  return (
    <div className="modal_bg" id="modal_bg">
      <div className="book_package_modal login-box" id="packageModal">
        <img
          src={Images.fodrixiconnew}
          className="image_login"
          alt="Fodrix Logo"
          width="50px"
          height="137px"
          style={{ paddingBottom: "13px" }}
        />

        <MdClose onClick={closeBookingModal} className="close-icon" />

        <div className="modal-heading-container">
          <p className="modal-heading">Book your package now!</p>
        </div>

        <form className="book_package-form" onSubmit={BookPackageHandler}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              defaultValue={firstname}
              id="first_name"
              onChange={(val) => {
                setFirstname(val.target.value);
              }}
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              defaultValue={lastname}
              id="last_name"
              onChange={(val) => {
                setLastname(val.target.value);
              }}
              required
            />
          </div>

          <div className="input-group">
            <select
              id="booked-city"
              defaultValue={props.city}
              onChange={(val) => {
                setCity(val.target.value);
              }}
              required
            >
              <option value=""> Search Destination </option>
              <option value="Agartala"> Agartala </option>{" "}
              <option value="Agra"> Agra </option>{" "}
              <option value="Ahemadabad"> Ahemadabad </option>{" "}
              <option value="Aizawl"> Aizawl </option>{" "}
              <option value="Ajmer"> Ajmer </option>{" "}
              <option value="Almora"> Almora </option>{" "}
              <option value="Amaravati"> Amaravati </option>{" "}
              <option value="Ambala"> Ambala </option>{" "}
              <option value="Amritsar"> Amritsar </option>{" "}
              <option value="Aurangabad"> Aurangabad </option>{" "}
              <option value="Ayodhya"> Ayodhya </option>{" "}
              <option value="Badrinath"> Badrinath </option>{" "}
              <option value="Bangalore"> Bangalore </option>{" "}
              <option value="Bhopal"> Bhopal </option>{" "}
              <option value="Bhubaneshwar"> Bhubaneshwar </option>{" "}
              <option value="Bikaner"> Bikaner </option>{" "}
              <option value="Bilaspur"> Bilaspur </option>{" "}
              <option value="Bodhgaya"> Bodhgaya </option>{" "}
              <option value="Calangute, Goa"> Calangute, Goa </option>{" "}
              <option value="Canacona, Goa"> Canacona, Goa </option>{" "}
              <option value="Chandigarh"> Chandigarh </option>{" "}
              <option value="Chennai"> Chennai </option>{" "}
              <option value="Chittoor"> Chittoor </option>{" "}
              <option value="Coimbatore"> Coimbatore </option>{" "}
              <option value="Dalhousie"> Dalhousie </option>{" "}
              <option value="Daman"> Daman </option>{" "}
              <option value="Darjeeling"> Darjeeling </option>{" "}
              <option value="Dehradun"> Dehradun </option>{" "}
              <option value="Delhi"> Delhi </option>{" "}
              <option value="Dharamshala"> Dharamshala </option>{" "}
              <option value="Dwarka"> Dwarka </option>{" "}
              <option value="Fatehpur Sikri"> Fatehpur Sikri </option>{" "}
              <option value="Gandhinagar"> Gandhinagar </option>{" "}
              <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>{" "}
              <option value="Gurgaon"> Gurgaon </option>{" "}
              <option value="Guwahati"> Guwahati </option>{" "}
              <option value="Gwalior"> Gwalior </option>{" "}
              <option value="Hampi"> Hampi </option>{" "}
              <option value="Haridwar"> Haridwar </option>{" "}
              <option value="Hyderabad"> Hyderabad </option>{" "}
              <option value="Imphal"> Imphal </option>{" "}
              <option value="Indore"> Indore </option>{" "}
              <option value="Itanagar"> Itanagar </option>{" "}
              <option value="Jabalpur"> Jabalpur </option>{" "}
              <option value="Jaipur"> Jaipur </option>{" "}
              <option value="Jaisalmer"> Jaisalmer </option>{" "}
              <option value="Jammu"> Jammu </option>{" "}
              <option value="Jhansi"> Jhansi </option>{" "}
              <option value="Jodhpur"> Jodhpur </option>{" "}
              <option value="Junagadh"> Junagadh </option>{" "}
              <option value="Kanpur"> Kanpur </option>{" "}
              <option value="Kasauli"> Kasauli </option>{" "}
              <option value="Kavaratti"> Kavaratti </option>{" "}
              <option value="Kedarnath"> Kedarnath </option>{" "}
              <option value="Kohima"> Kohima </option>{" "}
              <option value="Kolkata"> Kolkata </option>{" "}
              <option value="Kufri"> Kufri </option>{" "}
              <option value="Kullu"> Kullu </option>{" "}
              <option value="Leh"> Leh </option>{" "}
              <option value="Lucknow"> Lucknow </option>{" "}
              <option value="Madurai"> Madurai </option>{" "}
              <option value="Manali"> Manali </option>{" "}
              <option value="Mangalore"> Mangalore </option>{" "}
              <option value="Mathura"> Mathura </option>{" "}
              <option value="Mumbai"> Mumbai </option>{" "}
              <option value="Mussorie"> Mussorie </option>{" "}
              <option value="Mysore"> Mysore </option>{" "}
              <option value="Nagpur"> Nagpur </option>{" "}
              <option value="Nainital"> Nainital </option>{" "}
              <option value="Nashik"> Nashik </option>{" "}
              <option value="Ooty"> Ooty </option>{" "}
              <option value="Panaji, Goa"> Panaji, Goa </option>{" "}
              <option value="Patna, Bihar"> Patna, Bihar </option>{" "}
              <option value="Portblair"> Portblair </option>{" "}
              <option value="Prayagraj"> Prayagraj </option>{" "}
              <option value="Puducherry"> Puducherry </option>{" "}
              <option value="Pune"> Pune </option>{" "}
              <option value="Puri"> Puri </option>{" "}
              <option value="Raipur"> Raipur </option>{" "}
              <option value="Ranchi"> Ranchi </option>{" "}
              <option value="Raurkela"> Raurkela </option>{" "}
              <option value="Rishikesh"> Rishikesh </option>{" "}
              <option value="Rohtak"> Rohtak </option>{" "}
              <option value="Shillong"> Shillong </option>{" "}
              <option value="Shimla"> Shimla </option>{" "}
              <option value="Silchar"> Silchar </option>{" "}
              <option value="Silliguri"> Silliguri </option>{" "}
              <option value="Sonipat"> Sonipat </option>{" "}
              <option value="Surat"> Surat </option>{" "}
              <option value="Tawang"> Tawang </option>{" "}
              <option value="Thiruvananthpuram"> Thiruvananthpuram </option>{" "}
              <option value="Tirupati"> Tirupati </option>{" "}
              <option value="Udaipur"> Udaipur </option>{" "}
              <option value="Vadodara"> Vadodara </option>{" "}
              <option value="Varanasi"> Varanasi </option>{" "}
              <option value="Vijayawada"> Vijayawada </option>{" "}
              <option value="Visakhapatnam"> Visakhapatnam </option>{" "}
              <option value="Vrindavan"> Vrindavan </option>{" "}
              <option value="Warangal"> Warangal </option>{" "}
            </select>{" "}
            <input
              type="text"
              placeholder="Mobile Number"
              defaultValue={mobile}
              id="mobile_register"
              onChange={(val) => {
                setMobile(val.target.value);
              }}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              defaultValue={email}
              id="email_register"
              onChange={(val) => {
                setEmail(val.target.value);
              }}
              required
            />
          </div>

          <div className="input-group">
            <select
              id="service"
              defaultValue={props.service}
              onChange={(e) => {
                setService(e.target.selectedOptions[0].value);
              }}
              required
            >
              <option value=""> Select Service </option>{" "}
              <option value="Travel"> Travel </option>{" "}
              <option value="Wedding"> Wedding </option>{" "}
              <option value="Maternity"> Maternity </option>{" "}
              <option value="Baby"> Baby </option>{" "}
              <option value="Personal"> Personal </option>{" "}
              <option value="Business"> Business </option>{" "}
              <option value="Pre-Wedding"> Pre-Wedding </option>{" "}
              <option value="Post-Wedding"> Post-Wedding </option>{" "}
              <option value="Family"> Family </option>{" "}
              <option value="Other"> Other </option>{" "}
            </select>{" "}
            <select
              id="package"
              onChange={(val) => {
                setPackage(val.target.value);
                setPackagePrice(
                  val.target.selectedOptions[0].attributes.price.value
                );
              }}
              required
            >
              <option value="" price="">
                {" "}
                Select Package{" "}
              </option>{" "}
              <option value="Bronze" price={bronze}>
                {" "}
                Bronze ({bronze}Rs.){" "}
              </option>{" "}
              <option value="Silver" price={silver}>
                {" "}
                Silver ({silver}Rs.){" "}
              </option>{" "}
              <option value="Gold" price={gold}>
                {" "}
                Gold ({gold}Rs.){" "}
              </option>{" "}
            </select>{" "}
          </div>

          <div className="input-group">
            <input
              type="date"
              id="bookingdate"
              min=""
              onClick={() => {
                var dtTod = new Date();

                var month = dtTod.getMonth() + 1;
                var day = dtTod.getDate() + 3;
                var year = dtTod.getFullYear();

                if (month < 10) {
                  month = "0" + month.toString();
                }
                if (day < 10) {
                  day = "0" + day.toString();
                }

                var maxDate = year + "-" + month + "-" + day;

                document
                  .getElementById("bookingdate")
                  .setAttribute("min", maxDate);
              }}
              onChange={(val) => {
                setDate(val.target.value);
              }}
              required
            />{" "}
            <select
              id="eventTime"
              onChange={(val) => {
                setTime(val.target.value);
              }}
              required
            >
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
            </select>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Comment (Optional)"
              id="comment"
              onChange={(val) => {
                setComment(val.target.value);
              }}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Coupon Code (Optional)"
              id="coupon-code"
              onChange={(val) => {
                setCoupon(val.target.value);
              }}
            />
          </div>
          <button
            className="book_package-submit_btn"
            // onClick={RegisterClick}
            type="submit"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageModal;
