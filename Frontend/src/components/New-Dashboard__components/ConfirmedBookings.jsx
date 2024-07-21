

import React, { useEffect, useState } from "react";
import styles from "./ConfirmedBookings.module.css";

const ConfirmedBookings = () => {
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  const userId = localStorage.getItem("userId"); 
  console.log("latestuserid",userId);

  useEffect(() => {
    const fetchConfirmedBookings = async () => {
      try {
        const response = await fetch(`http://localhost:5000/transactions/user/${userId}`);
        const data = await response.json();
        setConfirmedBookings(data);
      } catch (error) {
        console.error("Error fetching confirmed bookings:", error);
      }
    };

    fetchConfirmedBookings();
  }, [userId]);

  return (
    <div className={styles["NewDashboard-photoshootCard"]}>
      {confirmedBookings.length > 0 ? (
        confirmedBookings.map((booking) => (
          <div className={styles["pending-booking__container"]} key={userId}>
              
            <div className={styles["pending-booking__inner"]}>
            <h3>Date: {booking.date}</h3>
              <h3>City: {booking.city}</h3> 
              <h3>Service: {booking.service}</h3> 
              <h3>Time: {booking.time}</h3>
              {/* <h3>Date: {booking.date}</h3>  */}
              <h3>Package: ₹ {booking.bookedPackage}</h3> 
              {/* <p>Price: {booking.bookedPackage}</p> */}
            </div>
          </div>
        ))
      ) : (
        <h3 className={styles["no_confirm_booking_heading"]}>No Bookings to show!</h3>
      )}
    </div>
  );
};

export default ConfirmedBookings;