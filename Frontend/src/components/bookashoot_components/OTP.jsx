import React, { useEffect } from "react";
import swal from "sweetalert";
import "./otp.css";
let apiKey = process.env.REACT_APP_CITY_HOME;
const OTP = () => {
  const email = localStorage.getItem("email");
  const firstname = localStorage.getItem("first_name");
  const lastname = localStorage.getItem("last_name");
  const mobile = localStorage.getItem("mobile");
  const password = localStorage.getItem("password");

  const sendOtptomail = async () => {
    const datareg = {
      to: email,
    };
    let otpreg = await fetch(apiKey + "/user/sendemailotp", {
      method: "POST",
      body: JSON.stringify(datareg),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const otpreg1 = await otpreg.json();
    if (otpreg1.status === true) {
      swal(`Email OTP sent ${otpreg1.message}`);
    } else {
      swal(otpreg1.message).then(function () {
        window.location = "/";
      });
    }
  };

  const verifyOtp = async () => {
    const otpvalue1 = document.getElementById("otp_value").value;
    console.log(otpvalue1)
    if(otpvalue1 !== ""){
      const otpreg = {
        otp: otpvalue1,
        email: email,
      };

      const otpverifyreg = await fetch(apiKey + "/verify_otp", {
        method: "POST",
        body: JSON.stringify(otpreg),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const otpreg2 = await otpverifyreg.json();
      if (otpreg2.status === true) {
        const registerData = {
          // firstname1: firstname,
          // lastname1: lastname,
          // email1: email,
          // mobile1: mobile,
          // password1: password,

          b_firstname: firstname,
          b_lastname: lastname,
          b_email: email,
          b_mobile: mobile,
          b_password: password,
        };
        const api = "/register_user"
        await fetch(apiKey + api, {
          method: "POST",
          body: JSON.stringify(registerData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        // const otpreg3 = await otpverifyreg1.json();

        swal("User register successfully").then(function () {
          window.location = "/login";
        });
      } else {
        alert("Incorrect OTP");
      }
    }else{
      swal("Please enter a valid OTP!")
    }
  };

  useEffect(() => {
    sendOtptomail();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center otp_component">
        <div className="card py-5 px-3 card_otpcomponents">
          <span className="mobile-text text-center">
            Please enter the OTP sent on your email <strong>{email}</strong>
          </span>
          <div className="d-flex flex-row mt-5">
            <input
              type="text"
              className="form-control form_otpcomponent"
              id="otp_value"
              // onChange={(val) => {
              //   setOtpvalue(val.target.value);
              // }}
            />
            {/* <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" />
            <input type="text" className="form-control form_otpcomponent" /> */}
          </div>

          <span className="d-block not-receive_otpcomponents">Resend OTP</span>
          <div className="text-center mt-0">
            <button className="verify_otpcomponents" onClick={verifyOtp}>
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OTP;
