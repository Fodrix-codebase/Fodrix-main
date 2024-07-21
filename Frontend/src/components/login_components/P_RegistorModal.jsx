import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./pRegistorModal.css";
import { MdClose } from "react-icons/md";
import swal from "sweetalert";

const P_RegistorModal = (props) => {
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
    const history = useHistory()
    const [firstname, setFirstname] = useState(fname);
    const [email, setEmail] = useState(userEmail);
    const [lastname, setLastname] = useState(lname);
    const [mobile, setMobile] = useState(userMobile);
    const [city, setCity] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [bookedPackage, setPackage] = useState("");
    const [comment, setComment] = useState("");
    const [coupon, setCoupon] = useState("");
    const [gold, setGold] = useState("Price: - ");
    const [silver, setSilver] = useState("Price: - ");
    const [bronze, setBronze] = useState("Price: - ");

    const apiKey = process.env.REACT_APP_CITY_HOME;

    const closeBookingModal = () => {
        props.setDisplayModal(false);
    };

    const RegisterClick = async (e) => {
        e.preventDefault();
        // localStorage.setItem("p_first_name", firstname);
        // localStorage.setItem("p_last_name", lastname);
        // localStorage.setItem("p_email", email);
        // localStorage.setItem("p_mobile", mobile);

        const pRegisterData = {
            firstname : firstname,
            email : email,
            lastname : lastname,
            mobile : mobile
        };

        const verify_Login = await fetch(apiKey + "pRegister", {
            method: "POST",
            body: JSON.stringify(pRegisterData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        console.log(verify_Login);
        const response = await verify_Login.json();
        console.log(response) 
    };

    return (
        <div className="modal_bg">
            <div className="p_register-container">
                <MdClose onClick={closeBookingModal} className="close-icon" />

                <div className="pResister_header">
                    <h3>Photographer Register</h3>
                </div>
                <form class="pRegister_form" onSubmit={RegisterClick}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="First Name"
                            id="first_name"
                            onChange={(val) => {
                                setFirstname(val.target.value);
                            }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="last_name"
                            onChange={(val) => {
                                setLastname(val.target.value);
                            }}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            id="email_register"
                            onChange={(val) => {
                                setEmail(val.target.value);
                            }}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            id="mobile_register"
                            onChange={(val) => {
                                setMobile(val.target.value);
                            }}
                            required
                        />
                    </div>

                    <div className="privacy_text">
                        By clicking on Register. I agree to Fodrix’s&nbsp;
                        <a href="/privacyPolicy">Privacy Policy </a>and
                        <a href="/tNc"> Terms and Conditions</a>.
                    </div>
                    <div class="p-form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default P_RegistorModal;
