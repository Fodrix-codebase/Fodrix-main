import React from "react";
import "./requestbooking.css";
export default function RequestBooking() {
  return (
    <>
      <section className="Requestbooking_css">
        <div className="form">
          <h1>Customer Details</h1>
          <input type="text" name="name" placeholder="Name" id="cname" />
          <br />
          <br />
          <input type="text" name="email" placeholder="Email" id="cemail" />
          <br />
          <br />
          <input type="text" name="phone" placeholder="Phone" id="cmobile" />
          <br />
          <br />
          <input
            type="text"
            name="location"
            placeholder="Location"
            id="clocation"
          />
          <br />
          <br />
          <input type="date" name="date" placeholder="DD/MM/YY" id="cdate" />
          <br />

          <button className="next_btn_requestbooking">Submit</button>
          <p>
            Thankyou for giving your details. Our team will reach out to you as
            soon as possible!
          </p>
        </div>
      </section>
    </>
  );
}
