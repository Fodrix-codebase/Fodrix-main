import React from "react";
import "./photoshoot.css";
import Images from "../../All_Images/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init({
  offset: 100,
  duration: 2000,
});
const Photoshoot = () => {
  return (
    <>
      <div className="photoshoot_home">
        <h1 className="heading_photoshoot text-center">Photoshoot Services</h1>

        <div className="grid">
          <div className="grid-items" data-aos="fade-up">
            <img loading="eager" src={Images.travel} alt=" not Found" />
            <div className="img-description ">
              <h3>Travel Shoot</h3>
              <p>
                We've simplified the process of finding you the right travel
                photographer. You can put down your camera and can connect with
                the surroundings.
              </p>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img loading="eager" src={Images.Wedding} alt=" not Found" />
            <div className="img-description">
              <h3>Wedding Shoots</h3>
              <p>
                Professional wedding photography can make capturing your
                life-changing moments hassle-free. Make your wedding a picture
                perfect day.
              </p>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img src={Images.business} alt=" not Found" />
            <div className="img-description">
              <h3>Business Shoot </h3>
              <p>
                Business shoots are one of the most important assets of any
                organisation/company. Create authentic images of your business
                with us.
              </p>
            </div>
          </div>
        </div>
        <div className="explore_buttonn">
          <Link to="/photoshoot_services" rel="noreferrer">
            <button className="btn btn-primary" id="explore_home_button">
              Explore all Services
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Photoshoot;
