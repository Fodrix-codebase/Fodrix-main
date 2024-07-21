import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import styles from "./UserAddress.module.css";

const UserAddress = () => {
  const [userData, setUserData] = useState({
  
    address: "",       // Add the 'address' field here
    landmark: "",
    city: "",
    state: "",
    pinCode: "",
  });

  useEffect(() => {
    // Fetch the user's profile data from the backend API
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Set the received user data in the state
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
    const handleSaveChanges = (e) => {
      e.preventDefault();
    // Make an API call to update the user's profile data on the backend
    axios
      .put("http://localhost:5000/profile", userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Handle success message or any other action after the data is updated
        console.log(response.data.message);
        swal("Updated successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles["userAddress-container"]}>
      <div className={styles["userAddress__section1"]}>
        <h5>Address</h5>
      </div>
      <form>
        <div className={styles["userAddress__section2"]}>
          <div>
            <label htmlFor="profileAddress">Address</label>
            <input
              type="text"
              name="address"
              id="profileAddress"
              placeholder="Street address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="landmark"
              placeholder="Landmark"
              value={userData.landmark}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles["userAddress__section3"]}>
          <div>
            <label htmlFor="profileCity">City</label>
            <input
              type="text"
              name="city"
              id="profileCity"
              placeholder="eg. New Delhi"
              value={userData.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="profileState">State</label>
            <input
              type="text"
              name="state"
              id="profileState"
              placeholder="eg. Delhi"
              value={userData.state}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="profilePinCode">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              id="profilePinCode"
              placeholder="eg. 110052"
              value={userData.pinCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button className={styles["UserAddress-button"]} onClick={handleSaveChanges}>
          Save changes
        </button>
      </form>
    </div>
  );
};

export default UserAddress;
