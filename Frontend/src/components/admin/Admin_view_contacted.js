import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_view_partners.css";

export default function Admin_view_contacted() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllContactSubmissions")
      .then((response) => {
        // console.log("API response:", response.data); // Debugging statement
        if (response.data && response.data.length > 0) {
          const sortedContacts = response.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setContacts(sortedContacts);
        } else {
          console.log("No contacts found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  return (
    <div className="partner-list">
      <h2 className="text-center text-success" style={{ fontWeight: "bold", textDecoration: "underline" }}>Contacted List</h2>
      <div className="row m-4">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={contact._id}>
              <div className="partner-item">
                <h3 className="partner-name">{contact.name}</h3>
                <p className="partner-details">
                  <span className="partner-label">Email</span>: {contact.email}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Phone</span>: {contact.phone}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Message</span>: {contact.message}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Date</span>: {contact.createdAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="partner-message">No contacts found.</p>
        )}
      </div>
    </div>
  );
}
