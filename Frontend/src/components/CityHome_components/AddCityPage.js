import React, { useState } from "react";
import "./AddCityPage.css";

const AddCityPage = () => {
  const [password, setPassword] = useState("");
  
  const [cityName, setCityName] = useState("");
  const [cityAbout, setCityAbout] = useState("");
  const [mapLink, setMapLink] = useState("");

  const [cityimage, setCityimage] = useState([]);
  const [touristSpots, setTouristSpots] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    const cityData = {
      name: cityName,
      about: cityAbout,
      image: cityimage,
      mapLink: mapLink,
      touristSpots: touristSpots,
    };

    try {
      const response = await fetch("http://localhost:5000/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cityData),
      });

      if (response.ok) {
        // City added successfully
        alert("City added successfully!");
        // Reset form fields after successful submission
        setCityName("");
        setCityAbout("");
        setMapLink("");
        setCityimage([]);
        setTouristSpots([]);
      } else {
        // Handle error response
        const errorData = await response.json();
        alert("Error adding city: " + errorData.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.log(error);
      alert("An error occurred while adding the city.");
    }
  };


  const handleCityImageChange = (e, index) => {
    const updatedCityimage = [...cityimage];
    updatedCityimage[index] = e.target.value;
    setCityimage(updatedCityimage);
  };

  const handleAddCityImage = () => {
    setCityimage([...cityimage, ""]);
  };

  const handleRemoveCityImage = (index) => {
    const updatedCityimage = [...cityimage];
    updatedCityimage.splice(index, 1);
    setCityimage(updatedCityimage);
  };

  const handleTouristSpotChange = (e, index) => {
    const updatedTouristSpots = [...touristSpots];
    updatedTouristSpots[index] = e.target.value;
    setTouristSpots(updatedTouristSpots);
  };

  const handleAddTouristSpot = () => {
    setTouristSpots([...touristSpots, ""]);
  };

  const handleRemoveTouristSpot = (index) => {
    const updatedTouristSpots = [...touristSpots];
    updatedTouristSpots.splice(index, 1);
    setTouristSpots(updatedTouristSpots);
  };

  return (
    <div className="addcity-container">
      <h1>Add City Details</h1>
    
        <form className="addcity" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cityName">City Name:</label>
            <input
              type="text"
              id="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              style={{ width: "300px" }}
              required
            />
          </div>
          <div>
            <label htmlFor="cityAbout">City About:</label>
            <textarea
              id="cityAbout"
              value={cityAbout}
              onChange={(e) => setCityAbout(e.target.value)}
              required
              style={{ width: "300px" }}
            />
          </div>
          <div>
            <label htmlFor="mapLink">Map Link:</label>
            <input
              type="text"
              id="mapLink"
              value={mapLink}
              onChange={(e) => setMapLink(e.target.value)}
              style={{ width: "300px" }}
            />
          </div>
          <div>
            <label>City image:</label>
            {cityimage.map((image, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => handleCityImageChange(e, index)}
                  required
                  style={{ width: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveCityImage(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="addbtn"
              onClick={handleAddCityImage}
            >
              Add Image
            </button>
          </div>
          <div>
            <label>Tourist Spots:</label>
            {touristSpots.map((spot, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={spot}
                  onChange={(e) => handleTouristSpotChange(e, index)}
                  required
                  style={{ width: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTouristSpot(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="addbtn"
              onClick={handleAddTouristSpot}
            >
              Add Tourist Spot
            </button>
          </div>
          <button type="submit" style={{ margin: "8px" }}>
            Add City
          </button>
        </form>
    </div>
  );
};

export default AddCityPage;
