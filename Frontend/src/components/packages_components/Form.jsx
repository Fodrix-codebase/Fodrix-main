import React, { useRef, useState } from "react";
import "./packages.css";
import Searchbox from "../Searchbox_component/Searchbox";
import Faq from "../faqs_components/Faq";
import CallbackAlert from "../../mainUtils/CallbackAlert";
export default function Form(props) {
  const form = useRef(null);
  const clearNameValue = useRef();
  const clearEmailValue = useRef();
  const clearCommentsValue = useRef();
  const clearPincodeValue = useRef();
  const clearMobileValue = useRef();
  const clearEventValue = useRef();
  const clearCityValue = useRef();
  const clearDateValue = useRef();
  const clearVenueValue = useRef();
  const url = "https://api.fodrix.com/addCallBack2";

  const [alertDisplay, setAlertDisplay] = useState(false);

  const callbackSubmitHandler = (e) => {
    e.preventDefault();
    try {
      const data = new FormData(document.getElementById("packageCallbackForm"));
      const formApiData = {};
      // loop to check input data
      for (const [key, value] of data) {
        formApiData[`${key}`] = value;
        // console.log(key, value);
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify(formApiData),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setAlertDisplay(true);
          clearNameValue.current.value = "";
          clearPincodeValue.current.value = "";
          clearEmailValue.current.value = "";
          clearMobileValue.current.value = "";
          clearCityValue.current.value = "";
          clearCommentsValue.current.value = "";
          clearEventValue.current.value = "";
          clearDateValue.current.value = "";
          clearVenueValue.current.value = "";
          setTimeout(() => {
            setAlertDisplay(false);
          }, 6000);
        })
        .catch((e) => {
          throw new Error(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="heading_form">Get a callback</div>
      {alertDisplay && <CallbackAlert />}
      <div className="callback">
        <form
          id="packageCallbackForm"
          onSubmit={callbackSubmitHandler}
          ref={form}
        >
          <div className="form-row">
            <div className="col packageform">
              <label for="row_1">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={clearNameValue}
                required
              />
            </div>
            <div className="col packageform ">
              <label for="row_1">Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                ref={clearEmailValue}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col packageform">
              <label for="row_2">Mobile number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mobile number"
                name="mobile"
                ref={clearMobileValue}
                required
              />
            </div>
            <div className="col packageform">
              <label for="row_2">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                ref={clearCityValue}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col packageform">
              <label for="row_3">Pincode</label>
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                name="pinCode"
                ref={clearPincodeValue}
                required
              />
            </div>
            <div className="col packageform ">
              <label for="row_3">Type of Event</label>
              <input
                type="text"
                className="form-control"
                value={props.myevents}
                name="typeOfPhotoshoot"
                ref={clearEventValue}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col packageform ">
              <label for="row_4">Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                name="date"
                ref={clearDateValue}
                required
              />
            </div>
            <div className="col packageform">
              <label for="row_3">Venue</label>
              <input
                type="text"
                className="form-control"
                placeholder="Venue"
                name="venue"
                ref={clearVenueValue}
                required
              />
            </div>
          </div>
          <div className=" textarea">
            <label for="row_3">Tell us more about the event</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="about"
              ref={clearCommentsValue}
              required
            ></textarea>
          </div>

          <div className="submit">
            <button type="submit" class="btn btn-primary form_button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="faq">
        <Faq />
      </div>
      <div id="search_heading_packages">
        <h3>Get an awesome photoshoot experience!</h3>
      </div>
      <div className="searchdes">
        <Searchbox />
      </div>
    </>
  );
}
