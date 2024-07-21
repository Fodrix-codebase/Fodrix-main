import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./FooterCity.css";
import { useState } from "react";
import { useEffect } from "react";



const Footercity = () => {
  const history = useHistory();
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city) {
      localStorage.setItem("city", city);
      history.push(`/City_Home/${city}`);
    }
  };

  const [homeCity, sethomeCity] = useState(localStorage.getItem("city"));
 
  return (
    <>
      {/* ============================= */}

      <footer className="foooter">
        <div className="containerr ">
          <h4 style={{ marginLeft: "11px", marginBottom: "15px" }}>
            Top Locations
          </h4>
          <div className="roww ">
            <div className="footer-coll">
              <ul>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Mumbai");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Delhi");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    Delhi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Banglore");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Bangalore
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Lucknow");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Lucknow
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Hyderabad");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Hyderabad
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Ahmedabad");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Ahmedabad
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Chennai");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Chennai
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kolkata");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Kolkata
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Surat");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Surat
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Pune");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Pune
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kanpur");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    kanpur
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Patna");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Patna
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Jaipur");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Jaipur
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Nagpur");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Nagpur
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Raipur");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Raipur
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Agra");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Agra
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Jodhpur");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Jodhpur
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Guwahati");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Guwahati
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Shilong");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Shillong
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Bhopal");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Bhopal
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Kolkata");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Calicut
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-coll">
              {/* <h4>Top Locations</h4> */}
              <ul>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Mysore");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Mysore
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Varanasi");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Varanasi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Srinagar");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Srinagar
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Nashik");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Nashik
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Dharamshala");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Dharamshala
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Calangute, Goa");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Calangute, Goa
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={function handleclick() {
                      localStorage.setItem("city", "Indore");
                     history.push("/City_Home/${city}");
                    }}
                  >
                    {" "}
                    Indore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footercity;
