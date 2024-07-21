import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import {Link} from 'react-router-dom'
import swal from "sweetalert";
import "./login.css";
import Images from "../../All_Images/Images";
import loginjs from "./loginjs";


export default function Login() {

  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const handleMobileNumberChange = (e) => {
    const inputMobileNumber = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (inputMobileNumber.length <= 12) {
      setMobileNumber(inputMobileNumber);
    }
  };

  const isMobileNumberValid = mobileNumber.length === 10;

  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      // Send the user data to the backend for registration
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobileNumber,
        password: password,
      };

      // Send the user data to the backend for registration
      const response = await axios.post('http://localhost:5000/auth/register', userData);

      // If registration is successful, redirect to the OTP verification page
    
      console.log(response.data);

      // Clear the form fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobileNumber('');
      setPassword('');
      history.push(`/OTP?email=${email}`);
    } catch (error) {
      console.error(error);
      // Handle registration error here
      // For example, show an error message to the user.
      if (error.response && error.response.data && error.response.data.error) {
        // If the error response contains an 'error' field, show it as a SweetAlert popup
        swal('Registration Error', error.response.data.error, 'error');
      } else {
        // If the error response doesn't contain an 'error' field, show a generic error message
        swal('Registration Error', 'An error occurred while registering the user.', 'error');
      }
    }
  };

  const [lemail, setLemail] = useState('');
  const [lpassword, setLpassword] = useState('');
  const LoginClick = () => {
    axios
      .post('http://localhost:5000/auth/login', {
        email: lemail,
        password: lpassword,
      })
      .then((response) => {
        console.log('Response data:', response.data);
        // Check if the login was successful and the response data contains the token
        if (response.status === 200 && response.data.token) {
          localStorage.setItem("auth", "true");

          // Check if the user has verified OTP
          if (response.data.isOTPVerified) {
            // const { user, token } = response.data;
            setIsAuthenticated(true);
            localStorage.setItem('token', response.data.token);
            
            
            const userId = response.data.userId;
        console.log('Extracted userId:', userId);
        localStorage.setItem("userId", userId);
        history.push(`/dashboard`);
   
            // Handle successful login
            // swal('Login successful').then(() => {
            //   // Redirect the user to the dashboard or home page
            //   history.push(`/dashboard`); // Replace '/dashboard' with the desired route
            // });
          } else {
            // Handle login failure due to unverified OTP
            swal('Login failed. Please verify OTP first.');
            setTimeout(() => {
              history.push(`/OTP?email=${lemail}`);
            }, 2000);
          }
        } else {
          // Handle other login failures (e.g., incorrect email or password)
          swal('Login failed. Please check your email and password and try again.');
        }
      })
      .catch((error) => {
        // Handle login failures, including 403 forbidden (user not verified)
        if (error.response && error.response.status === 403) {
          swal('Login failed. Please verify OTP first.');
          setTimeout(() => {
            history.push(`/OTP?email=${lemail}`);
          }, 2000);
        } else {
          swal('Login failed. Please check your email and password and try again.');
          console.error(error);
        }
      });
  };
  
  
  
  
  
  


  useEffect(() => {
    loginjs();

    const title = document.querySelector("title");
    title.innerText = `Login | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute("content", "Login into your Fodrix Account - Fodrix");

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/login");
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
      <div class="login-box">
        <img
          src={Images.fodrixiconnew}
          className="image_login"
          alt="Fodrix Logo"
          width="50px"
          height="137px"
          style={{ paddingBottom: "13px" }}
        />
        <div class="btn-group">
          <button
            type="button"
            className="btn btn--preferred signup-link"
            id="signup-box-link"
            onClick={loginjs}
            style={{ borderLeft: "1px solid #ddd" }}
          >
            Register
          </button>

          <button
            type="button"
            className="btn btn--preferred active login-link"
            id="login-box-link"
            style={{ backgroundColor: "#007bff", color: "white" }}
            onClick={loginjs}
          >
            Log in
          </button>
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
      if (lemail !== "" && lpassword !== "") {
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
            <Link to="/ForgotPassword" style={{ color: "#007bff" }}>
              Forgot Password?
            </Link>
          </div>
          <div class="foot-lnk">
            <label for="pass">
              Don't Have an account?
              <a href="#" className="active signup-link" onClick={loginjs}>
                &nbsp;Register
              </a>
            </label>
          </div>
        </div>
        
        <form class="email-signup" onSubmit={handleRegistration}>
          <label for="u-form" className="label_login">
            First Name
          </label>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="First Name"
              id="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Last Name
          </label>
          <div class="u-form-group">
            <input
              type="text"
              placeholder="Last Name"
              id="last_name"
              value={lastName}
            onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Email
          </label>
          <div class="u-form-group">
            <input
              type="email"
              placeholder="Email"
              id="email_register"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label for="u-form" className="label_login">
            Mobile Number
          </label>
          <div className="u-form-group">
        <input
          type="text"
          placeholder="Mobile Number"
          id="mobile_register"
          value={mobileNumber}
          onChange={(e) => {
            handleMobileNumberChange(e);
            setIsUserInteracted(true);
          }}
          required
          maxLength={10}
        />
        {isUserInteracted && !isMobileNumberValid && (
          <p style={{ color: 'red' }}>Mobile number must be exactly 10 digits</p>
        )}
      </div>

          <label for="u-form" className="label_login">
            Password
          </label>
          <div class="u-form-group">
            <input
              type="password"
              placeholder="Password"
              id="password_register"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            required
            />
          </div>
          <div className="text-center privacy_text">
            By clicking on Create Account. I agree to Fodrix’s&nbsp;
            <a href="/privacyPolicy">Privacy Policy </a>and
            <a href="/tNc"> Terms and Conditions</a>.
          </div>
          <div class="u-form-group">
            <button type="submit">Register</button>
          </div>
          <div class="foot-lnk_r">
            <label for="pass">
              Already Have an account?
              <a href="#" className="login-link" onClick={loginjs}>
                &nbsp;Log in
              </a>
            </label>
          </div>
        </form>

      </div>
    </>
  );
}
