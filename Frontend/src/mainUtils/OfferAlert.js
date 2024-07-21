import React from "react";
import { Link } from "react-scroll";
import styles from "./OfferAlert.module.css";

const OfferAlert = () => {
  return (
    <Link
      className={styles["offerAlert-container"]}
      to="OfferAlertScrollId"
      smooth={true}
      offset={-80}
      duration={500}
    >
      <p className={styles["offerAlert__inner"]}>
        50% Off on Travel Photoshoot &nbsp; | &nbsp; Book us for your Wedding
        and get a free Pre-Wedding shoot.
      </p>
    </Link>
  );
};

export default OfferAlert;
