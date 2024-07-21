import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin_view_partners.css"

export default function Admin_view_partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/partner/getAllPartners")
      .then((response) => {
        if (response.data.success) {
          const sortedPartners = response.data.partners.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPartners(sortedPartners);
        } else {
          console.log("Error fetching partners:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching partners:", error);
      });
  }, []);
  
  

 
  return (
    <div className="partner-list">
       <h2 className="text-center text-success" style={{ fontWeight: "bold", textDecoration: "underline" }}>Partner List</h2>
      <div className="row m-4">
        {partners.length > 0 ? (
          partners.map((partner, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={partner._id}>
              <div className="partner-item">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-details">
                  <span className="partner-label">Email</span>: {partner.email}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Mobile</span>: {partner.mobile}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Category</span>: {partner.category}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Other category</span>: {partner.category2}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Business Name</span>: {partner.businessName}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Why Fodrix</span>: {partner.whyFodrix}
                </p>
                <p className="partner-details">
                  <span className="partner-label">How Fodrix</span>: {partner.howFodrix}
                </p>
                <p className="partner-details">
                  <span className="partner-label">Date</span>: {partner.createdAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="partner-message">No partners found.</p>
        )}
      </div>
    </div>
  );
  
      
}
