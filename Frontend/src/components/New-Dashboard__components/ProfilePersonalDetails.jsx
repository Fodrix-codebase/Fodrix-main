import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import styles from "./ProfilePersonalDetails.module.css";

const ProfilePersonalDetails = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    instagramHandle: "",
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
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

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
        swal('Updated successfully!');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles["ProfilePersonalDetails__container"]}>
      <form className={styles["ProfilePersonalDetails__FormContainer"]}>
        <div className={styles["ProfilePersonalDetails-section1"]}>
          <img
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            alt="Fodrix"
            width="100px"
            height="100px"
          />
          <div
            className={
              styles["ProfilePersonalDetails-section1__inputContainer"]
            }
          >
            <div>
              <label htmlFor="profileFirstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="profileFirstName"
                value={userData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="profileLastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="profileLastName"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className={styles["ProfilePersonalDetails-section2"]}>
          <label htmlFor="profileEmail">Email</label>
          <input
            type="text"
            name="email"
            id="profileEmail"
            value={userData.email}
            onChange={handleInputChange}
            readOnly
            style={{ backgroundColor: '#ddd' }}
          />
        </div>
        <div className={styles["ProfilePersonalDetails-section4"]}>
          <div>
            <label htmlFor="profilePhoneNumber">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              id="profilePhoneNumber"
              value={userData.mobileNumber}
              onChange={handleInputChange}
              
            />
          </div>
        </div>
        <div className={styles["ProfilePersonalDetails-section4"]}>
          <label htmlFor="profileInsta">Instagram Handle</label>
          <input
            type="text"
            name="instagramHandle"
            id="profileInsta"
            value={userData.instagramHandle}
            onChange={handleInputChange}
          />
        </div>
        <button
          className={styles["ProfilePersonalDetails-button"]}
          onClick={handleSaveChanges}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default ProfilePersonalDetails;
