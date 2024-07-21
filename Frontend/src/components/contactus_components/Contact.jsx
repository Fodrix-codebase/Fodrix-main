import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

const Contact = () => {
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
      await axios.post("/contact", formData);

      // Handle success, such as showing a success message or redirecting
      console.log("Form data submitted successfully!");
    } catch (error) {
      // Handle error, such as displaying an error message
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="container col-lg-12 col-md-6 background_contact">
        <p className="contactuscomponents_text container-fluid">
          Hi there!! If you have any suggestions, queries, or questions related
          to our service or even if you want to book a photoshoot, feel free to
          contact us by filling the contact form below!
        </p>
        <form className="form_contactus" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            id="contactname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            id="contactemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="phone"
            placeholder="Your Phone number"
            id="contactphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="msg_contactus">
            <textarea
              rows="6"
              cols="60"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="button_contactuspage">
            <button type="submit">SEND MESSAGE</button>
          </div>
        </form>
        {/* Rest of the component */}
      </div>
    </>
  );
};

export default Contact;
