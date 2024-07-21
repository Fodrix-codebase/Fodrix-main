import React from "react";
import styles from "./CallbackAlert.module.css";

const CallbackAlert = () => {
  return (
    <div className={styles.alertContainer}>
      <div className={styles["alertContainer__inner"]}>
        <p>
          We have got your response and will connect with you shortly. Thank
          you.
        </p>
      </div>
    </div>
  );
};

export default CallbackAlert;
