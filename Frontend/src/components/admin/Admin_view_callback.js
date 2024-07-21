import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_view_partners.css";

export default function Admin_view_callbacks() {
  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getCallbacks")
      .then((response) => {
        // console.log("API response:", response.data); // Debugging statement
        if (response.data && response.data.length > 0) {
          const sortedCallbacks = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setCallbacks(sortedCallbacks);
        } else {
          console.log("No callbacks found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching callbacks:", error);
      });
  }, []);
  
  return (
    <div className="partner-list">
      <h1 className="text-center text-success" style={{ fontWeight: "bold", textDecoration: "underline" }}>Callback Submissions</h1>
      <div className="row m-4">
        {callbacks.length > 0 ? (
          callbacks.map((callback, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={callback._id}>
              <div className="partner-item">
                <h3 className="partner-name">{callback.firstName} {callback.lastName}</h3>
                <p className="partner-details">
                  <span className="partner-label">Email</span>: {callback.email}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Mobile</span>: {callback.mobile}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Type of Photoshoot</span>: {callback.typeOfPhotoshoot}
                </p>
                <p className="partner-details">
                  <span className="partner-label">City</span>: {callback.city}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Comments</span>: {callback.comments}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Date</span>: {callback.createdAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="partner-message">No callback submissions found.</p>
        )}
      </div>
    </div>
  );
}
