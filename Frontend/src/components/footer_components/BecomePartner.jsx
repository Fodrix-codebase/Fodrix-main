import React, { useEffect, useRef, useState } from "react";
import "./become.css";
import "./Partner.css";
import CallbackAlert from "../../mainUtils/CallbackAlert";

export default function BecomePartner() {
  const clearNameValue = useRef();
  const clearEmailValue = useRef();
  const clearMobileValue = useRef();
  const clearCategoryValue = useRef();
  const clearOtherCategoryValue = useRef();
  const clearBusinessValue = useRef();
  const clearWhyFodrixValue = useRef();
  const clearHowFodrixValue = useRef();
  const url = "http://localhost:5000/partner/addPartner";

  const [alertDisplay, setAlertDisplay] = useState(false);

  const callbackSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(document.getElementById("becomePartnerForm"));

      const formApiData = {};
      for (const [key, value] of formData) {
        formApiData[key] = value;
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: formApiData.name,
          email: formApiData.email,
          mobile: formApiData.mobile,
          category: formApiData.category,
          category2: formApiData.category2 || null,
          businessName: formApiData.businessName,
          whyFodrix: formApiData.whyFodrix,
          howFodrix: formApiData.howFodrix,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        setAlertDisplay(true);
        clearNameValue.current.value = "";
        clearEmailValue.current.value = "";
        clearMobileValue.current.value = "";
        clearCategoryValue.current.value = "Influencer";
        clearOtherCategoryValue.current.value = "";
        clearBusinessValue.current.value = "";
        clearWhyFodrixValue.current.value = "";
        clearHowFodrixValue.current.value = "";
        setTimeout(() => {
          setAlertDisplay(false);
        }, 6000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      // Handle error and display appropriate message to the user
    }
  };

  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Become our Partner | Fodrix`;

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/BecomePartner");
  }, []);

  return (
    <>
      {alertDisplay && <CallbackAlert />}
      <div className="heading_become text-center">
        <h1>Partnership with Fodrix</h1>
      </div>
      <div className="sub_heading_Partner text-center">
        Thank you for showing your interest in becoming a partner with Fodrix
      </div>
      <div className="side_image top_image">
        <img
          src="https://images.moneycontrol.com/static-mcnews/2020/04/partnership-pact-435x435.jpg"
          className="side_img top_img"
          alt=" not Found"
        />
      </div>
      <div className="form_Partner partner_form">
        <form id="becomePartnerForm" onSubmit={callbackSubmitHandler}>
          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example3">
              Name
            </label>
            <input
              type="text"
              id="form6Example3"
              class="form-control"
              placeholder="Name"
              name="name"
              ref={clearNameValue}
              required
            />
          </div>

          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example3">
              Email
            </label>
            <input
              type="email"
              id="form6Example3"
              class="form-control"
              placeholder="Email"
              name="email"
              ref={clearEmailValue}
              required
            />
          </div>

          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example6">
              Mobile Number
            </label>
            <input
              type="number"
              id="form6Example6"
              class="form-control"
              placeholder="Mobile Number"
              name="mobile"
              ref={clearMobileValue}
              required
            />
          </div>
          <div class="form-outline form_content_part mb-4">
            <label class="visually-hidden" for="inlineFormSelectPref">
              Category
            </label>
            <select
              class="select"
              className="select_dropdown"
              name="category"
              ref={clearCategoryValue}
              required
            >
              <option value="Influencer">Influencer</option>
              <option value="Travel Agency">Travel Agency</option>
              <option value="Hotels">Hotels</option>
              <option value="Tourism">Tourism</option>
              <option value="Fashion Lifestyle">Fashion Lifestyle</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div class="form-outline form_content_part mb-4">
            <input
              type="text"
              id="form6Example6"
              class="form-control"
              placeholder="If Others, Mention Here"
              name="category2"
              ref={clearOtherCategoryValue}
            />
          </div>
          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example3">
              Business Name
            </label>
            <input
              type="text"
              id="form6Example3"
              class="form-control"
              placeholder="Business Name"
              name="businessName"
              ref={clearBusinessValue}
              required
            />
          </div>
          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example3">
              Why do you want to partner with us?
            </label>
            <input
              type="text"
              id="form6Example3"
              class="form-control"
              placeholder="Why do you want to partner with us?"
              name="whyFodrix"
              ref={clearWhyFodrixValue}
              required
            />
          </div>
          <div class="form-outline form_content_part mb-4">
            <label class="form-label" for="form6Example3">
              How did you know about us?
            </label>
            <input
              type="text"
              id="form6Example3"
              class="form-control"
              placeholder="How did you know about us?"
              name="howFodrix"
              ref={clearHowFodrixValue}
              required
            />
            <div className="form-outline mb-4 submit_button">
              <button
                type="submit"
                class="btn btn-primary"
                style={{
                  width: "100%",
                  margin: "auto",
                  marginTop: "28px",
                }}
              >
                Submit
              </button>
            </div>
            <div className="last_text">
              <p className="text-center">We’ll get back to you in 24 hours</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
