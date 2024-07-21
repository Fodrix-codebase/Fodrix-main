
import swal from "sweetalert";
import "./otp.css";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import swal from 'sweetalert';

const OTPVerification = ({ history }) => {
  const [otpValue, setOtpValue] = useState('');
  const [isResending, setIsResending] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  const sendOtpToEmail = async () => {
    try {
      setIsResending(true);
      const response = await axios.post('http://localhost:5000/auth/resend-otp', {
        email: email,
      });
      setIsResending(false);
      swal(`Email OTP sent: ${response.data.message}`);
    } catch (error) {
      setIsResending(false);
      console.log(error);
      swal('Failed to send OTP. Please try again later.');
    }
  };
  
  const verifyOtp = () => {
    // Send the entered OTP and the email from the query parameter to the backend for verification
    axios
      .post('http://localhost:5000/auth/verify-otp', { // Update the endpoint to 'verify-otp'
        email: email,
        otp: otpValue,
      })
      .then((response) => {
        // If the OTP is verified successfully, redirect the user to the login page
        swal('OTP Verified Successfully');
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      })
      .catch((error) => {
        // Handle OTP verification failure here
        // For example, show an error message to the user.
        console.error(error);
        swal('Incorrect OTP. Please try again.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center otp_component">
      <div className="card py-2 px-3 card_otpcomponents">
        <span className="mobile-text text-center">
          Please enter the OTP sent on your email <strong>{email}</strong>
        </span>
        <div className="d-flex flex-row mt-5">
          {/* Add onChange handler to set otpValue state */}
          <input
            type="text"
            className="form-control form_otpcomponent"
            id="otp_value"
            value={otpValue}
            onChange={(e) => setOtpValue(e.target.value)}
            required
          />
        </div>

        {/* Resend OTP button */}
        <span className="d-block not-receive_otpcomponents">
          {isResending ? (
            <span>Sending OTP...</span>
          ) : (
            <button className="resend_otpcomponents" onClick={sendOtpToEmail}>
              Resend OTP
            </button>
          )}
        </span>

        <div className="text-center mt-0">
          <button className="verify_otpcomponents" onClick={verifyOtp}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;


