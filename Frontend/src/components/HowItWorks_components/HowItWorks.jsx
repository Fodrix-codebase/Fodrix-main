import React, { useEffect } from "react";
import "./how.css";
import Searchbox from "../Searchbox_component/Searchbox";
import Images from "../../All_Images/Images";
import Whatsapp from "../Whatsapp";
import CallbackPopup from "../../mainUtils/CallbackPopup";
export default function HowitWorks() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `How it works | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "India’s best way to hire a professional photographer. Book a best photographer near you, have your photos within 48 hrs. ▸Travel ▸Wedding ▸Pre-Wedding & more."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/HowItWorks");
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>How it works | Fodrix</title>
        <meta
          name="description"
          content="India’s best way to hire a professional photographer. Book a best photographer near you, have your photos within 48 hrs. ▸Travel ▸Wedding ▸Pre-Wedding & more."
        />
      </Helmet> */}
      <Whatsapp />
      <h1 className="h1 text-center p-2 how-h1">How it Works</h1>
      <div className="div2subhead_how">
        <p>
          Capture all the beautiful moments of your trip by our photographers.
          Book a photoshoot through Fodrix in just 5 steps
        </p>
      </div>
      <div className="container how howItWorks-section1__container">
        <div className="left">
          <li>
            <img
              loading="lazy"
              src={Images.bookashooticon}
              className="img_icon"
              alt=" not Found"
            ></img>
            <div className="card_content">
              <h4>1. Book your shoot</h4>
              <p>
                Select your destination, date and package of the shoot by
                filling the shoot booking form. Make the payment.
              </p>
            </div>
          </li>
          <li>
            <img
              loading="lazy"
              src={Images.assignphotographer}
              className="img_icon"
              alt=" not Found"
            />
            <div className="card_content">
              <h4>2. Assigning Photographer</h4>
              <p>
                We’ll select the professional photographer and assign the work
                to the photographer.
              </p>
            </div>
          </li>
          <li>
            <img src={Images.knowabout} className="img_icon" alt=" not Found" />
            <div className="card_content">
              <h4>3. Know your photographer</h4>
              <p>You’ll receive all the details about your photographer.</p>
            </div>
          </li>
        </div>
        <div className="right">
          <li>
            <img src={Images.shootday} className="img_icon" alt="not Found" />
            <div className="card_content">
              <h4>4. Shoot day</h4>
              <p>
                Meet your photographer 10-15 minutes prior to your shoot on your
                chosen destination. Enjoy your awesome photo and video shoot.
              </p>
            </div>
          </li>
          <li>
            <img
              src={Images.receivephotoshowitworks}
              className="img_icon"
              alt=" not Found"
            />
            <div className="card_content">
              <h4>5. Receive your photos</h4>
              <p>
                Your photos will be delivered to you through email in 2-5
                working days after the shoot.
              </p>
            </div>
          </li>
        </div>
      </div>
      {/* /* Search button */}
      <CallbackPopup popup={true} callBackForm={true} />
      <div className="search_heading">
        <h3>Get an awesome photoshoot experience!</h3>
      </div>
      <div className="search_how">
        <Searchbox />
      </div>
    </>
  );
}
