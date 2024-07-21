import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import swal from "sweetalert";
import "./login.css";
import "./p-login.css";
import Images from "../../All_Images/Images";
import P_RegistorModal from './P_RegistorModal'

global.peruserEmail = "";
global.loggedIn = true;
global.userfirstname = "";
global.usermobileno = "";
export var logged = null;
let apiKey = process.env.REACT_APP_CITY_HOME;

export default function Login(props) {
  const history = useHistory();
  const [displayModal, setDisplayModal] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [lemail, setLemail] = useState("");
  const [lpassword, setLpassword] = useState("");
  
  const LoginClick = async () => {

    const loginData = {
      l_email: lemail,
      l_password: lpassword,
    };

    const verify_Login = await fetch(apiKey + "/pLogin", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const loginResponse = await verify_Login.json();
    if (loginResponse.status === true) {
      localStorage.setItem("userFirstName", loginResponse.data.b_firstname);
      localStorage.setItem("userLastName", loginResponse.data.b_lastname);
      localStorage.setItem("userMobile", loginResponse.data.b_mobile);
      localStorage.setItem("userEmail", loginResponse.data.b_email);
      localStorage.setItem("isPhotographer", true);

      global.loggeduserlogged = true;

      localStorage.setItem("auth", true);
      // localStorage.setItem("isuserloged", true);
      // window.localStorage.setItem("isAuth", "true");
      // console.log(window.localStorage.getItem("isAuth"));
      history.push("/dashboard");
      document.location.reload();
      // console.log("WE are in if dashboard");
    } else {
      swal("User not found");
      console.log(verify_Login)
      console.log(loginData)
      // localStorage.setItem("auth", false);
      console.log(localStorage.getItem("auth"));
      // global.loggeduserlogged = false;
      // global.loggedIn = false;
      //invalid id or password
    }
  };

  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Login | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute("content", "Login into your Fodrix Account - Fodrix");

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/pLogin");
  }, []);
  // verify btn redirect to login
  return (
    <>
      {/* <Helmet>
        <title>Login | Fodrix</title>
        <meta
          name="description"
          content="Login into your Fodrix Account - Fodrix"
        />
      </Helmet> */}

      {displayModal && <P_RegistorModal setDisplayModal={setDisplayModal} />}

      <div class="login-box">
        <img
          src={Images.fodrixiconnew}
          className="image_login"
          alt="Fodrix Logo"
          width="50px"
          height="137px"
          style={{ paddingBottom: "13px" }}
        />
        <div className="pLogin_header">
          <h3>Photographer Login</h3>
        </div>

        <div class="email-login">
          <label for="u-form" className="label_login">
            Email
          </label>
          <div class="u-form-group">
            <input
              type="email"
              placeholder="Email"
              id="l_email"
              onChange={(val) => {
                setLemail(val.target.value);
              }}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Password
          </label>
          <div class="u-form-group">
            <input
              type="password"
              placeholder="Password"
              id="l_password"
              onChange={(val) => {
                setLpassword(val.target.value);
              }}
              required
            />
          </div>

          <div class="u-form-group">
            <button
              onClick={() => {
                if (lpassword !== "" || lemail !== "") {
                  LoginClick();
                } else {
                  swal("All fields are compulsory!");
                }
              }}
            >
              Log in
            </button>
          </div>

          <div class="foot-lnk">
            <a href="#forgot" style={{ color: "#007bff" }}>
              Forgot Password?
            </a>
          </div>
          <div class="foot-lnk">
              Don't Have an account?
              <a href="#" className="active signup-link" onClick={()=>setDisplayModal(true)}>
                &nbsp;Register
              </a>
          </div>
        </div>
        
      </div>
    </>
  );
}
