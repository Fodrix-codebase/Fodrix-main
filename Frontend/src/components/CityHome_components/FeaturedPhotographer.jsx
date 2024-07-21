import React, { useState, useEffect } from "react";
import styles from "./FeaturedPhotographer.module.css";
import PhotographerCard from "./PhotographerCard";
import Images from "../../All_Images/Images";
import axios from "axios"; // Import Axios for making API calls

const FeaturedPhotographer = ({city}) => {
  const [photographers, setPhotographers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city.trim() === "") {
          // Fetch all photographers if no city is provided
          const response = await axios.get("http://localhost:5000/photographers");
          setPhotographers(response.data);
        } else {
          // Fetch photographers of the specific city
          const response = await axios.get(`http://localhost:5000/photographers/city/${city}`);
          setPhotographers(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      {photographers.map((photographer) => (
        <PhotographerCard
          key={photographer._id} // Make sure to use a unique key for each element in the array
          name={photographer.firstName + " " + photographer.lastName}
          location={photographer.city}
          profilePic={photographer.profilePhotoLink}
          description={photographer.bio}
          displayImages={photographer.coverPhotoLinks}
          firstName={photographer.firstName}
          
        />
        
      ))}
     
    </>
  );
};

export default FeaturedPhotographer;
