import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import paymentStart from "../bookashoot_components/payment";
import Dashboardimageload from "./Dashboardimageload";
import "./NewUserDashboard.css";
import Razorpay from "razorpay";

import { packages } from "../packages_components/PackageData";

const NewUserDashboard = () => {
  const history = useHistory();

  const logoutButtonHandler = () => {
    localStorage.clear();
    localStorage.removeItem("auth");
    history.push("/login");
  };



  const [userData, setUserData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    instagramHandle: "",
  });

  useEffect(() => {
    // Fetch the user's profile data from the backend API
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Set the received user data in the state
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookedPackage, setPackage] = useState("");
 
  const [comment, setComment] = useState("");
  const [coupon, setCoupon] = useState("");
  const [gold, setGold] = useState(" - ");
  const [silver, setSilver] = useState(" - ");
  const [bronze, setBronze] = useState(" - ");
  const [bookedPackagePrice, setBookedPackagePrice] = useState(0);


  const preFetchHandler = () => {
    // Setting field which may pre fetched as default like name, email, mobile, city, service, package etc.
    // From /photoshoot_services page.
    // From //City_Home page.
    setCity(document.getElementById("booked-city").value);
    // From localStorage if user is authorized page.
    // setFirstname(document.getElementById("first_name").value);
    // setLastname(document.getElementById("last_name").value);
    // setMobile(document.getElementById("mobile_register").value);
    // setEmail(document.getElementById("email_register").value);
    serviceHandler();
  };

  const initPayment = async (data, numericAmount) => {
    try {
      console.log("Initiating payment with data:", data);
      const verifyUrl = "http://localhost:5000/payment/verify";
      
      const options = {
        key_id: "rzp_live_fUutULYiJsPyl9", 
        amount: numericAmount,
        

        currency: data.currency,
        description: "Test Transaction",
        order_id: data.id,
       
        
        theme: {
          color: "#3399cc",
        },
       
       
        handler: async (response) => {
          console.log("paye1", userData);
          console.log("Numeric Amount:", numericAmount, typeof numericAmount);
          try {
            const verifyData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              
              prefill: {
                userId: userData._id,
                firstName: userData.firstName, 
                lastName: userData.lastName,
                email: userData.email,
                mobileNumber: userData.mobileNumber,
                city: city, 
        service: service, 
        date: date, 
        time: time, 
        bookedPackage: bookedPackage, 
        comment: comment, 
        coupon: coupon, 
              },
            };
            
          console.log("line119 verify data", verifyData);
            const { data } = await axios.post(verifyUrl, verifyData);
            console.log("Payment verification response:", data);
            history.push("/dashboard");
          } catch (error) {
            console.log("Verification Error:", error);
          }
        },
        
        "payment.failed": function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        },
      };
      
      console.log("Payment options:", options);

      var pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.log("Initialization Error:", error);
    }
  };

  const BookPackageHandler = async (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(bookedPackagePrice);
  
    try {
      const orderUrl = "http://localhost:5000/payment/orders";
      const response = await axios.post(orderUrl, {
        amount: numericAmount,
       
        userId: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        mobileNumber: userData.mobileNumber,
        city: city, 
        service: service, 
        date: date, 
        time: time, 
        bookedPackage: bookedPackage, 
        comment: comment, 
        coupon: coupon, 
      });
  
      const data = response.data;
      console.log("Order Response:", data);
  
      const amountInPaise = data.data.amount;
      const convertedAmount = amountInPaise / 100;
  
      console.log("Converted Amount:", convertedAmount);
  
      initPayment(data.data, convertedAmount);
    } catch (error) {
      console.log("API Error:", error);
    }
  };
  
  
  

  const serviceHandler = () => {
    packages.find((pack) => {
      if (pack.title === service) {
        setGold(pack.price3);
        setSilver(pack.price2);
        setBronze(pack.price1);
      }
    });
  };

  
  useEffect(() => {
    serviceHandler();
  }, [service]);
  useEffect(() => {
    preFetchHandler();
  }, []);

  return (
    <div className="newUserDashboard__container">
      <div className="newUserDashboard-menu__container">
        <div className="newUserDashboard-menuContainer__img">
          <Dashboardimageload />
        </div>
        <div className="newUserDashboard-menuContainer__btns">
          <div className="newUserDashboard-button__container">
            {/* <button
              onClick={logoutButtonHandler}
              className="NewUserDashboard-button"
            >
              Logout
            </button> */}
            {/* <Link to="/">
              <button className="NewUserDashboard-button">
                Home
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="dashboard_packageModal">
        <form className="book_package-form" onSubmit={BookPackageHandler}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name"
              
              id="first_name"
              value={userData.firstName}
                onChange={handleInputChange}
              required
            />

            <input
              type="text"
              placeholder="Last Name"
             
              id="last_name"
              value={userData.lastName}
                onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <select
              id="booked-city"
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
             
              id="mobile_register"
              value={userData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
             
              id="email_register"
              value={userData.email}
              onChange={handleInputChange}
              readOnly
              style={{ backgroundColor: '#ddd' }}
              required
            />
          </div>

          <div className="input-group">
            <select
              id="service"
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
  onChange={(event) => {
    const selectedValue = event.target.value;
    setPackage(selectedValue);
    setBookedPackagePrice(parseFloat(selectedValue)); // Convert and set the numeric price
  }}
  required
> <option value="" price="">
                {" "}
                Select Package{" "}
              </option>{" "}
              <option value={bronze} price={bronze}>
                {" "}
                Bronze ({bronze}Rs.){" "}
              </option>{" "}
              <option value={silver} price={silver}>
                {" "}
                Silver ({silver}Rs.){" "}
              </option>{" "}
              <option value={gold} price={gold}>
                {" "}
                Gold ({gold}Rs.){" "}
              </option>{" "}
  
</select>


          </div>
          {/* <option value="" price="">
    Select Package
  </option>
  <option value="34999">Bronze</option>
  <option value="49999">Silver</option>
  <option value="69999">Gold</option> */}


 
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
              <option value="6:00am">06:00am</option>
              <option value="7:00am">07:00am</option>
              <option value="8:00am">08:00am</option>
              <option value="9:00am">09:00am</option>
              <option value="10:00am">10:00am</option>
              <option value="11:00am">11:00am</option>
              <option value="12:00pm">12:00pm</option>
              <option value="1:00pm">1:00pm</option>
              <option value="2:00pm">2:00pm</option>
              <option value="3:00pm">3:00pm</option>
              <option value="4:00pm">4:00pm</option>
              <option value="5:00pm">5:00pm</option>
              <option value="6:00pm">6:00pm</option>
              <option value="7:00pm">7:00pm</option>
              <option value="8:00pm">8:00pm</option>
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

export default NewUserDashboard;
