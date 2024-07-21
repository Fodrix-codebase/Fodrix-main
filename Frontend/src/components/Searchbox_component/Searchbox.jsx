import React, { useState } from "react";
import "./Searchbox.css";
import { useHistory } from "react-router-dom";

export default function Searchbox() {
  const history = useHistory();
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city) {
      localStorage.setItem("city", city);
      history.push(`/City_Home/${city}`);
    }
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
    localStorage.setItem("city", selectedCity);
    history.push(`/City_Home/${selectedCity}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <div className="sb-example-1">
        <div id="home_search">
         
          <select
          className="searchTerm"
          value={city}
          onChange={(e) => handleCityChange(e.target.value)}
          // onKeyPress={handleKeyPress}
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
          </select>{" "}
          <button class="searchButton" onClick={handleClick}>
            <i class="fa fa-search"> </i>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
