import React, { useEffect, useState } from "react";
import styles from "./PendingBookings.module.css";

const PendingBookings = () => {
  const apiKey = process.env.REACT_APP_CITY_HOME;
  const [pendingShoot, setPendingShoot] = useState([]);
  let url = apiKey + "user/clientRecord_pending/";
  const fetchPendingBookings = () => {
    let api = url + localStorage.getItem("userEmail");
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPendingShoot(data.data);
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPendingBookings();
  }, []);

  return (
    <div className={styles["NewDashboard-photoshootCard"]}>
      {pendingShoot
        ?
        pendingShoot.reverse().map((request, id) => (
          <div className={styles["pending-booking__container"]} key={id}>
            <h6>{request.date}</h6>
            <div className={styles["pending-booking__inner"]}>
              <h3>{request.location}</h3>
              <p>{request.user_services1}</p>
              <p>{request["c_package"]} ({request["package_price"]})</p>
            </div>
            <div className={styles["pendingBookings-action__container"]}>
              <button>Change</button>
              <button>Delete</button>
            </div>
          </div>
        ))
        :
        <h3 className={styles["no_confirm_booking_heading"]}>No confirmed bookings to show!</h3>
      }
    </div>
  );
};

export default PendingBookings;
