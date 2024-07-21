import React, { useEffect, useRef, useState } from "react";
import CallbackAlert from "../../mainUtils/CallbackAlert";

import axios from "axios";
import "./Contact.css";

export default function ContactUs() {
  
  // const url = "https://api.fodrix.com/addConnect";

  const [alertDisplay, setAlertDisplay] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name,
      email,
      phone,
      message,
    };
  
    try {
      await axios.post("http://localhost:5000/contact", formData);
      console.log("Form data submitted successfully!");
  
      setAlertDisplay(true); // Display the alert message
  
      setTimeout(() => {
        // Clear the form and hide the alert message after 5000ms (5 seconds)
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlertDisplay(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

 

  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Contact us | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Help us in contacting you for the best photography experience for your travel, wedding, pre-wedding, and all type of events in all over India."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/contact");
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>Contact us | Fodrix</title>
        <meta
          name="description"
          content="Help us in contacting you for the best photography experience for your travel, wedding, pre-wedding, and all type of events in all over India."
        />
      </Helmet> */}
      {alertDisplay && <CallbackAlert />}
      <div className="main_container_ctus">
        <div className="container_ctus">
          <div className="content_ctus">
            <div className="left-side_ctus">
              <div className="address details_ctus">
                <i className="fas fa-handshake" />
                <div className="topic">
                  <h4>Social Media</h4>
                  <div className="social_ctus">
                    <a href="https://www.facebook.com/fodrix" target="_blank">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/fodrixx/" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/fodrixx" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/company/fodrix/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="phone details_ctus">
                <i className="fas fa-phone-alt" />
                <div className="topic">Phone</div>
                <div className="text-one">+91-7020147576</div>
              </div>
              <div className="email details_ctus">
                <i className="fas fa-envelope" />
                <div className="topic">Email</div>
                <div className="text-one">support@fodrix.com</div>
              </div>
            </div>
            <div className="right-side_ctus">
              <h1 className="topic-text">Connect with Fodrix</h1>
              <p className="topic_para">
                If you have any question, suggestion or you just want to book a
                photo session then feel freeto get in touch with us.
              </p>
              <form id="connectWithFodrixForm" onSubmit={handleSubmit}>
                <div className="input-box_ctus">
                <input
            type="text"
            placeholder="Your name"
            id="contactname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
                </div>
                <div className="input-box_ctus">
                <input
            type="email"
            placeholder="Your email"
            id="contactemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
                </div>
                <div className="input-box_ctus">
                <input
            type="phone"
            placeholder="Your Phone number"
            id="contactphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
                </div>
                <div className="input-box_ctus message-box">
                  <textarea
                    name="message"
                    id="msg"
                    cols={30}
                    rows={10}
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="button_ctus">
                  <button type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
