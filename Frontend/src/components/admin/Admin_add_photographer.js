import React, { useState } from "react";
import axios from "axios";

export default function AdminAddPhotographer() {
  const [formData, setFormData] = useState({
    coverPhotoLinks: [],
    firstName: "",
    lastName: "",
    bio: "",
    profilePhotoLink: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCoverLinkChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevFormData) => {
      const updatedCoverLinks = [...prevFormData.coverPhotoLinks];
      updatedCoverLinks[index] = value;
      return {
        ...prevFormData,
        coverPhotoLinks: updatedCoverLinks,
      };
    });
  };

  const handleAddCoverLink = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      coverPhotoLinks: [...prevFormData.coverPhotoLinks, ""],
    }));
  };

  const handleRemoveCoverLink = (index) => {
    setFormData((prevFormData) => {
      const updatedCoverLinks = [...prevFormData.coverPhotoLinks];
      updatedCoverLinks.splice(index, 1);
      return {
        ...prevFormData,
        coverPhotoLinks: updatedCoverLinks,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/photographers", formData);
      console.log(response.data); // You can handle the response here
      alert("Photographer added successfully!");
      setFormData({
        coverPhotoLinks: [],
        firstName: "",
        lastName: "",
        bio: "",
        profilePhotoLink: "",
        city: "",
      });
    } catch (error) {
      console.error("Error adding photographer:", error);
      alert("Failed to add photographer. Please try again.");
    }
  };

  return (
<>
    <h1 className="text-center">Add Photographer</h1>
    <div className="containers my-3 mx-5" style={{border: "2px solid #ccc",padding:"20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff"}}>
     
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cover Photo Links:</label>
          {formData.coverPhotoLinks.map((link, index) => (
            <div key={index} className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={link}
                onChange={(e) => handleCoverLinkChange(e, index)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={() => handleRemoveCoverLink(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleAddCoverLink}
          >
            Add Cover Link
          </button>
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            name="bio"
            className="form-control"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Profile Photo Link:</label>
          <input
            type="text"
            name="profilePhotoLink"
            className="form-control"
            value={formData.profilePhotoLink}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <select
            className="form-control searchTerm"
            value={formData.city}
            onChange={handleChange}
            name="city" // Use handleChange to update the city in formData
          >
             <option value=""> Search Destination </option>
            <option value="Agartala"> Agartala </option>{" "}
            <option value="Agra"> Agra </option>{" "}
            <option value="Ahmedabad"> Ahmedabad </option>{" "}
            <option value="Aizawl"> Aizawl </option>{" "}
            <option value="Ajmer"> Ajmer </option>{" "}
            <option value="Almora"> Almora </option>{" "}
            <option value="Amaravati"> Amaravati </option>{" "}
            <option value="Ambala"> Ambala </option>{" "}
            <option value="Amritsar"> Amritsar </option>{" "}
            <option value="Anantapur"> Anantapur </option>{" "}
            <option value="Aurangabad"> Aurangabad </option>{" "}
            <option value="Ayodhya"> Ayodhya </option>{" "}
            <option value="Badrinath"> Badrinath </option>{" "}
            <option value="Bangalore"> Bangalore </option>{" "}
            <option value="Bhopal"> Bhopal </option>{" "}
            <option value="Bhubaneswar"> Bhubaneswar </option>{" "}
            <option value="Bikaner"> Bikaner </option>{" "}
            <option value="Bilaspur"> Bilaspur </option>{" "}
            <option value="Bodhgaya"> Bodhgaya </option>{" "}
            <option value="Calangute"> Calangute </option>{" "}
            <option value="Canacona"> Canacona </option>{" "}
            <option value="Chandigarh"> Chandigarh </option>{" "}
            <option value="Chennai"> Chennai </option>{" "}
            <option value="Chittoor"> Chittoor </option>{" "}
            <option value="Coimbatore"> Coimbatore </option>{" "}
            <option value="Dalhousie"> Dalhousie </option>{" "}
            <option value="Daman"> Daman </option>{" "}
            <option value="Darjeeling"> Darjeeling </option>{" "}
            <option value="Dehradun"> Dehradun </option>{" "}
            <option value="New Delhi"> New Delhi </option>{" "}
            <option value="Dharamshala"> Dharamshala </option>{" "}
            <option value="Dhubri"> Dhubri </option>{" "}
            <option value="Dibrugarh"> Dibrugarh </option>{" "}
            <option value="Dwarka"> Dwarka </option>{" "}
            <option value="Fatehpur Sikri"> Fatehpur Sikri </option>{" "}
            <option value="Gandhinagar"> Gandhinagar </option>{" "}
            <option value="Gangtok"> Gangtok </option>{" "}
            <option value="Gurgaon"> Gurgaon </option>{" "}
            <option value="Guwahati"> Guwahati </option>{" "}
            <option value="Gwalior"> Gwalior </option>{" "}
            <option value="Hampi"> Hampi </option>{" "}
            <option value="Haridwar"> Haridwar </option>{" "}
            <option value="Hyderabad"> Hyderabad </option>{" "}
            <option value="Imphal"> Imphal </option>{" "}
            <option value="Indore"> Indore </option>{" "}
            <option value="Itanagar"> Itanagar </option>{" "}
            <option value="Jabalpur"> Jabalpur </option>{" "}
            <option value="Jaipur"> Jaipur </option>{" "}
            <option value="Jaisalmer"> Jaisalmer </option>{" "}
            <option value="Jammu"> Jammu </option>{" "}
            <option value="Jhansi"> Jhansi </option>{" "}
            <option value="Jodhpur"> Jodhpur </option>{" "}
            <option value="Junagadh"> Junagadh </option>{" "}
            <option value="Kanpur"> Kanpur </option>{" "}
            <option value="Kasauli"> Kasauli </option>{" "}
            <option value="Kavaratti"> Kavaratti </option>{" "}
            <option value="Kedarnath"> Kedarnath </option>{" "}
            <option value="Kohima"> Kohima </option>{" "}
            <option value="Kolkata"> Kolkata </option>{" "}
            <option value="Kufri"> Kufri </option>{" "}
            <option value="Kullu"> Kullu </option>{" "}
            <option value="Leh"> Leh </option>{" "}
            <option value="Lucknow"> Lucknow </option>{" "}
            <option value="Madurai"> Madurai </option>{" "}
            <option value="Manali"> Manali </option>{" "}
            <option value="Mangalore"> Mangalore </option>{" "}
            <option value="Mathura"> Mathura </option>{" "}
            <option value="Mumbai"> Mumbai </option>{" "}
            <option value="Mussorie"> Mussorie </option>{" "}
            <option value="Mysore"> Mysore </option>{" "}
            <option value="Nagpur"> Nagpur </option>{" "}
            <option value="Nainital"> Nainital </option>{" "}
            <option value="Nashik"> Nashik </option>{" "}
            <option value="Ooty"> Ooty </option>{" "}
            <option value="Panaji"> Panaji </option>{" "}
            <option value="Patna"> Patna </option>{" "}
            <option value="Portblair"> Portblair </option>{" "}
            <option value="Prayagraj"> Prayagraj </option>{" "}
            <option value="Puducherry"> Puducherry </option>{" "}
            <option value="Pune"> Pune </option>{" "}
            <option value="Puri"> Puri </option>{" "}
            <option value="Raipur"> Raipur </option>{" "}
            <option value="Ranchi"> Ranchi </option>{" "}
            <option value="Raurkela"> Raurkela </option>{" "}
            <option value="Rishikesh"> Rishikesh </option>{" "}
            <option value="Rohtak"> Rohtak </option>{" "}
            <option value="Shillong"> Shillong </option>{" "}
            <option value="Shimla"> Shimla </option>{" "}
            <option value="Silchar"> Silchar </option>{" "}
            <option value="Silliguri"> Silliguri </option>{" "}
            <option value="Sonipat"> Sonipat </option>{" "}
            <option value="Surat"> Surat </option>{" "}
            <option value="Tawang"> Tawang </option>{" "}
            <option value="Tezu"> Tezu </option>{" "}
            <option value="Thiruvananthpuram"> Thiruvananthpuram </option>{" "}
            <option value="Tirupati"> Tirupati </option>{" "}
            <option value="Udaipur"> Udaipur </option>{" "}
            <option value="Vadodara"> Vadodara </option>{" "}
            <option value="Varanasi"> Varanasi </option>{" "}
            <option value="Vijayawada"> Vijayawada </option>{" "}
            <option value="Visakhapatnam"> Visakhapatnam </option>{" "}
            <option value="Vrindavan"> Vrindavan </option>{" "}
            <option value="Warangal"> Warangal </option>{" "}
          </select>
        </div>
        <button type="submit" className="btn btn-primary text-center">
          Add Photographer
        </button>
      </form>
    </div>
    </>
  );
}
