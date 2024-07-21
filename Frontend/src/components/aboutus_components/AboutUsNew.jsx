import React, { useEffect } from "react";
import Images from "../../All_Images/Images";
import "./aboutusnew.css";
import OurTeam from "./OurTeam";
import Whatsapp from "../Whatsapp";
import CallbackPopup from "../../mainUtils/CallbackPopup";
export default function AboutUs() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `About us | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "About Fodrix – Photography agency having the best Photographer all over India for Travel, wedding, Pre- wedding, business, etc."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/about_us");
  }, []);
  return (
    <>
      <Whatsapp />
      <div className="aboutus_component">
        <div className="aboutus_component_para">
          <div className="aboutus_container" >
            <div className="aboutus_container-wrapper">
              <div className="aboutus_heading">
                <h1>What is Fodrix</h1>
              </div>
              <p className="aboutus_para">
                Fodrix connects you to the local professional and best photographers
                in India for your vacation plans, we also have the best wedding
                photographers in India for special events like weddings,
                pre-wedding, parties, business events, etc. We are pleased to tell
                you that we have collaborated with top photographers in India from
                over 100+ cities in order to make your photography experience more
                comfortable. All you have to do is confirm your booking, with Fodrix
                the best photography agency in India and our professional
                photographers will arrive at your location to capture all your
                wonderful memories!
              </p>
            </div>
            <div className="aboutus-img">
              <img
                loading="lazy"
                alt="img"
                // src={Images.aboutusgraphics}
                src={Images.Aboutus2}
                className="about_img1"
              />
            </div>
          </div>
          <div className="aboutus_container mx-0" style={{backgroundColor:"#f7fbfd"}}>
            <div className="aboutus_container-wrapper">
              <div className="aboutus_heading">
                <h1>Why choose Fodrix</h1>
              </div>
              <p className="aboutus_para">
                We at Fodrix strive to make your photography experience top-notch by
                providing the best photographer in India. We are quite serious when
                it comes to photography, therefore we pay special attention when it
                comes to your photos. So, sit back and receive the memories that you
                will treasure in the future. We are here for you and aiming towards
                giving an astonishing experience to you not just by capturing your
                moments but also by guiding you on your vacation about the best
                tourist places, famous outlets and cuisine.
              </p>
            </div>
            <div className="aboutus-img">
              <img
                loading="lazy"
                // src={Images.Aboutusshow}
                src={Images.Aboutus1}
                alt="not found"
                width="1200"
                className="about_img2"
              />
            </div>
          </div>
          <div className="aboutus_container " style={{backgroundColor:"#eff6f8"}}>
            <div className="aboutus_container-wrapper">
              <div className="aboutus_heading">
                <h1>How Fodrix started</h1>
              </div>
              <p className="aboutus_para">
                The Founder and CEO, Ankit Kesarwani loves to travel and capture
                travel memories. He has travelled extensively around India. So,
                based on his travelling experiences, his friends would always
                enquire whether he knew any local photographers of the cities they
                were planning to visit. This is when Ankit realised that what if
                there is a simple way to connect travellers and photographers. With
                this idea in his mind and willingness, he founded Fodrix as an
                online platform, intending to connect people with the professional
                photographers in India.
              </p>
            </div>
            <div className="aboutus-img">
              <img
                loading="lazy"
                // src={Images.Aboutusshow}
                src={Images.Aboutus3}
                alt="not found"
                width="1200"
                className="about_img2"
              />
            </div>
          </div>
        </div>
        <OurTeam />
        <CallbackPopup popup={true} callBackForm={true} />
      </div>
    </>
  );
}
