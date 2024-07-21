import React from "react";
import styles from "./OurPartners.module.css";
import Images from "../../All_Images/Images";

const featuredPartners = [
  Images.Bark,
  Images.Canvera,
  Images.SulekhaLogo,
  Images.Sortlist,
  Images.Tripadvisor,
  Images.Trustpilot,
  Images.WedMeGood,
  Images.WeddingWire,
  Images.Bark,
  Images.Canvera,
  Images.SulekhaLogo,
  Images.Sortlist,
  Images.Tripadvisor,
  Images.Trustpilot,
  Images.WedMeGood,
  Images.WeddingWire,
];

const OurPartners = () => {
  return (
    <div className={styles["featured-partner__container"]}>
      <h1 style={{"fontWeight":"700"}}>Our Featured Partners</h1>
      <div className={styles["image-slider__container"]}>
        <div className={styles["image-box"]}>
          {featuredPartners.map((image, id) => (
            <div className={styles["image"]}>
              <img loading="lazy" src={image} key={id} alt="featuredPartners" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
