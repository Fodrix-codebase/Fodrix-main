import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_view_partners.css";

export default function Admin_view_career() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/career")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const sortedCareers = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setCareers(sortedCareers);
        } else {
          console.log("No careers found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching careers:", error);
      });
  }, []);

  return (
    <div className="partner-list">
      <h2 className="text-center text-success" style={{ fontWeight: "bold", textDecoration: "underline" }}>Career Applied List</h2>
      <div className="row m-4">
        {careers.length > 0 ? (
          careers.map((career) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={career._id}>
              <div className="partner-item">
                <h3 className="partner-name">{career.name}</h3>
                <p className="partner-details">
                  <span className="partner-label">Email</span>: {career.email}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Phone</span>: {career.phone}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Message</span>: {career.message}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Resume Link</span>: {career.resumeLink}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Date</span>: {career.createdAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="partner-message">No careers found.</p>
        )}
      </div>
    </div>
  );
}
