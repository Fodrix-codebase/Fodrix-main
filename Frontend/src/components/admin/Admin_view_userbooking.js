import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "../New-Dashboard__components/ConfirmedBookings.module.css";

export default function Admin_view_userbooking(props) {
  const [confirmedBookings, setConfirmedBookings] = useState([]);
  console.log(props); // Add this line to check the props

  const userId = props.match.params.userId;

  useEffect(() => {
    if (userId) {
      // Fetch booking data for the selected user
      axios.get(`http://localhost:5000/transactions/user/${userId}`)
        .then(response => {
          setConfirmedBookings(response.data);
        })
        .catch(error => {
          console.error('Error fetching booking data:', error);
        });
    }
    console.log('Fetching bookings for user ID:', userId);
  }, [userId]);

  return (
    <div className={styles["NewDashboard-photoshootCard"]}>
      {confirmedBookings.length > 0 ? (
        confirmedBookings.map((booking, index) => (
            <div className={styles["pending-booking__container"]} key={index}>
             <div className={styles["pending-booking__inner"]}>
             <h3>Name:  {booking.firstName} {booking.lastName}</h3>
              
              {/* <h3>Phone: {booking.mobileNumber}</h3> */}
              <h3>Date: {booking.date}</h3>
              <h3>City: {booking.city}</h3>
              <h3>Service: {booking.service}</h3>
              <h3>Time: {booking.time}</h3>
              <h3>Package: ₹ {booking.bookedPackage}</h3>
            </div>
          </div>
        ))
      ) : (
        <h3 className="partner-message">No Bookings to show!</h3>
      )}
    </div>
  );
};
