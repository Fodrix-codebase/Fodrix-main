import React from "react";
import Images from "../../All_Images/Images";
import "../../css/Home.css";

const BookPhotographer = () => {
  return (
    <>
      <div className="heading_home_components text-center" style={{marginTop:"20px"}}>
        <h1>How to Book a Photographer</h1>
      </div>
      <div className="booking_home ">
        <div className="cards">
          <img
            loading="eager"
            alt="img"
            src={Images.Bookyourshoot}
            width="70"
          />
          <h4>1. Book Your Shoot</h4>
          <p>
            {" "}
            Select your destination, date and the package as per your
            requirement for the shoot.
          </p>
        </div>
        <div className="cards">
          <img
            loading="eager"
            alt="img"
            src={Images.meeturphotographer}
            width="75"
          />
          <h4>2. Meet your photographer</h4>
          <p>
            Get in touch with your photographer and enjoy your awesome photo and
            video shoot.
          </p>
        </div>
        <div className="cards">
          <img
            loading="eager"
            alt="img"
            src={Images.receivephotos}
            width="70"
          />
          <h4>3. Recieve your photos</h4>
          <p>
            Your photos will be delivered to you through email in 2-5 working
            days after the shoot.
          </p>
        </div>
      </div>
    </>
  );
};
export default BookPhotographer;
