import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the server
    axios.get('http://localhost:5000/profile/all')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  

  return (
    <div className="partner-list">
      <h1 className="text-center text-success" style={{ fontWeight: "bold", textDecoration: "underline" }}>User Details</h1>
      <div className="row m-4">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="partner-item">
                <h3 className="partner-name">{user.firstName} {user.lastName}</h3>
                <p className="partner-details">
                  <span className="partner-label">Email</span>: {user.email}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Mobile Number</span>: {user.mobileNumber}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Instagram Handle</span>: {user.instagramHandle}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Address</span>: {user.address}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Landmark</span>: {user.landmark}
                </p>
                <p className="partner-details">
                  <span className="partner-label">City</span>: {user.city}
                </p>
                <p className="partner-details">
                  <span className="partner-label">State</span>: {user.state}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Pin Code</span>: {user.pinCode}
                </p>
                {/* Include other user details here */}
                <Link to={`/Admin_view_userbooking/${user._id}`} className="btn btn-primary">
        View Bookings
      </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="user-message">No user profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
