// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./DashboardBooking.module.css";
// import PendingBookings from "./PendingBookings";
// import ConfirmedBookings from "./ConfirmedBookings";
// import {BsPlusCircle} from "react-icons/bs";
// import {CgMenu} from "react-icons/cg";

// const DashboardBooking = (props) => {
//   const [activeTab, setActiveTab] = useState(1);
//   const confirm = useRef();
//   const pending = useRef();
//   useEffect(() => {
//     if (activeTab === 1) {
//       confirm.current.classList.add("bookingTabActiveState");
//       pending.current.classList.remove("bookingTabActiveState");
//     } else {
//       pending.current.classList.add("bookingTabActiveState");
//       confirm.current.classList.remove("bookingTabActiveState");
//     }

//     console.log(confirm.current);
//   }, [activeTab]);
//   return (
//     <div className={styles["NewDashboard-Body__container"]}>
//       <div className={styles["NewDashboard-header"]}>
//         <CgMenu className={styles["menu-btn"]} onClick={()=>props.menuDisplayHandler(true)}/>
//         <h1 className={styles["dashboard-heading"]}>Bookings</h1>
//         <Link to="/userDashboard">
//           <button>Book a photoshoot</button>
//         </Link>
//         {/* <Link className={styles["bookAShoot_btn-link"]} title="Book a shoot!" to="/userDashboard">
//           <BsPlusCircle className={styles["bookAShoot_btn"]}/>
//         </Link> */}
//       </div>
//       <div className={styles["NewDashboard-booking__route"]}>
//         <div
//           className={styles["NewDashboard-booking__link"]}
//           onClick={() => setActiveTab(1)}
//           ref={confirm}
//         >
//           <h5>Confirmed</h5>
//         </div>
//         <div
//           className={styles["NewDashboard-booking__link"]}
//           onClick={() => setActiveTab(2)}
//           ref={pending}
//         >
//           <h5>Pending</h5>
//         </div>
//       </div>
//       <div className={styles["NewDashboard-photoshootCard"]}>
//         {activeTab === 1 ? <ConfirmedBookings /> : <PendingBookings />}
//       </div>
//     </div>
//   );
// };

// export default DashboardBooking;


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardBooking.module.css";
import ConfirmedBookings from "./ConfirmedBookings";
import { CgMenu } from "react-icons/cg";

const DashboardBooking = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const confirm = useRef();

  useEffect(() => {
    if (activeTab === 1) {
      confirm.current.classList.add("bookingTabActiveState");
    }

    console.log(confirm.current);
  }, [activeTab]);

  return (
    <div className={styles["NewDashboard-Body__container"]}>
      <div className={styles["NewDashboard-header"]}>
        <CgMenu className={styles["menu-btn"]} onClick={() => props.menuDisplayHandler(true)} />
        <h1 className={styles["dashboard-heading"]}>Bookings</h1>
        <Link to="/userDashboard">
          <button>Book a photoshoot</button>
        </Link>
      </div>
      <div className={styles["NewDashboard-booking__route"]}>
        <div
          className={styles["NewDashboard-booking__link"]}
          onClick={() => setActiveTab(1)}
          ref={confirm}
        >
          <h5>Booking Details</h5>
        </div>
      </div>
      <div className={styles["NewDashboard-photoshootCard"]}>
        {activeTab === 1 && <ConfirmedBookings />}
      </div>
    </div>
  );
};

export default DashboardBooking;
