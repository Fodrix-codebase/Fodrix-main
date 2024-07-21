import React, { useState } from "react";
import styles from "./CallbackPopup.module.css";
import YouTube from "react-youtube";
import { MdClose } from "react-icons/md";
import CallbackAlert from "./CallbackAlert";
import { useRef } from "react";

const CallbackPopup = (props) => {
 
  let formContainer = styles.popupContainer;
  let formContainer__inner = styles["popupContainer__inner"];
  if (props.callBackForm) {
    formContainer = styles.popupCallbackContainer;
    formContainer__inner = styles["popupCallbackContainer__inner"];
  }
  
  // const url = "https://api.fodrix.com/addCallBack";
  const url = "http://localhost:5000/addCallBack";

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [typeOfPhotoshoot, setTypeOfPhotoshoot] = useState("");
const [city, setCity] = useState("others");
const [comments, setComments] = useState("");
const [alertDisplay, setAlertDisplay] = useState(false);

const formRef = useRef(null);

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(formRef.current);
  const data = Object.fromEntries(formData.entries());

  // Perform your API call here to store the data in the backend
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle the API response as needed
      console.log(result);

      // Show the alert
      setAlertDisplay(true);

      // Clear the form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setTypeOfPhotoshoot("");
      setCity("");
      setComments("");

      // Remove the alert after 3 seconds
      setTimeout(() => {
        setAlertDisplay(false);
      }, 5000);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
};


const youtubePlayerRef = useRef(null);

  const handleVideoReady = (event) => {
    // Automatically start playing the video
    event.target.playVideo();
  };

  const handleVideoEnd = (event) => {
    // Restart the video when it ends
    event.target.seekTo(0);
    event.target.playVideo();
  };



  return (
    props.popup && (
      <div id="OfferAlertScrollId">
        {alertDisplay && <CallbackAlert />}
        <form
         
         ref={formRef}
         action=""
         id={formContainer}
         className="callbackFormHandle"
         onSubmit={handleSubmit}
        >
          
          {props.callBackForm && (
            <YouTube
              videoId="RrBqrHjlAig"
              opts={{
                height: "370",
                width: "650",
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  controls: 1,
                  loop: 1, // Enable the loop behavior
                  playlist: "RrBqrHjlAig", // Set the playlist to the same video ID for loop
                },
              }}
              onReady={handleVideoReady}
              onEnd={handleVideoEnd}
            />
          )}



          

<div id={formContainer__inner}>
<MdClose
  onClick={() => {
    props.closePopup(false);
  }}
  id={styles.closeIcon}
/>
<div id={styles.popupHeader}>
  <h1>Looking for Photographer?</h1>
</div>
<div id={styles["popupForm__inputContainer"]}>
  <div className={styles["popupForm__input"]}>
    <label htmlFor="">
      First Name <sup>*</sup>
    </label>
    <input
      className={styles["popup__TextField"]}
      type="text"
      required
      name="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}

    
    />
  </div>
  <div className={styles["popupForm__input"]}>
    <label htmlFor="">
      Last Name <sup>*</sup>
    </label>
    <input
      className={styles["popup__TextField"]}
      type="text"
      required
      name="lastName"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}

    />
  </div>
  <div className={styles["popupForm__input"]}>
    <label htmlFor="">
      Email <sup>*</sup>
    </label>
    <input
      className={styles["popup__TextField"]}
      type="text"
      required
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}

    
    />
  </div>
  <div className={styles["popupForm__input"]}>
    <label htmlFor="">
      Mobile <sup>*</sup>
    </label>
    <input
      className={styles["popup__TextField"]}
      type="text"
      required
      name="mobile"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
     
    />
  </div>
</div>
<div id={styles["popup-photoshootDetails__container"]}>
  <div id={styles["popup-photoshootType__container"]}>
    <div id={styles["photoshootType__heading"]}>
      <label>
        Type of Photoshoot <sup>*</sup>
      </label>
      
    </div>
    <div className={styles["popup-photoshootType"]}>
      <div className={styles["popup-photoshootType__Section1"]}>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="Travel"
            name="typeOfPhotoshoot"
            required
            value="Travel"
            checked={typeOfPhotoshoot === "Travel"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="Travel">Travel</label>
        </div>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="wedding"
            name="typeOfPhotoshoot"
            value="Wedding"
            required
            checked={typeOfPhotoshoot === "Wedding"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="wedding">Wedding</label>
        </div>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="business"
            name="typeOfPhotoshoot"
            value="Business"
            required
            checked={typeOfPhotoshoot === "Business"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="business">Business</label>
        </div>

        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="baby"
            name="typeOfPhotoshoot"
            value="Baby"
            required
            checked={typeOfPhotoshoot === "Baby"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="baby">Baby</label>
        </div>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="family"
            name="typeOfPhotoshoot"
            value="Family"
            required
            checked={typeOfPhotoshoot === "Family"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="family">Family</label>
        </div>
      </div>
      <div className={styles["popup-photoshootType__Section2"]}>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="maternity"
            name="typeOfPhotoshoot"
            value="Maternity"
            required
            checked={typeOfPhotoshoot === "Maternity"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="maternity">Maternity</label>
        </div>

        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="personal"
            name="typeOfPhotoshoot"
            value="Personal"
            required
            checked={typeOfPhotoshoot === "Personal"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="personal">Personal</label>
        </div>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="prewed"
            name="typeOfPhotoshoot"
            value="Pre-Wedding"
            required
            checked={typeOfPhotoshoot === "Pre-Wedding"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="prewed">Pre-Wedding</label>
        </div>
        <div className={styles["popup-photoshootType__values"]}>
          <input
            type="radio"
            id="other"
            name="typeOfPhotoshoot"
            value="Other"
            required
            checked={typeOfPhotoshoot === "Other"}
            onChange={(e) => setTypeOfPhotoshoot(e.target.value)}
          />
          <label for="other">Other</label>
        </div>
      </div>
    </div>
  </div>
  <div id={styles["photoshoot-city__container"]}>
    <select
      name="city"
      id={styles["photoshoot-city"]}
      value={city}
      required
      onChange={(e) => setCity(e.target.value)}
      
      
    >
      <option value="0">Choose City</option>
      <option value="Agartala"> Agartala </option>
      <option value="Agra"> Agra </option>
      <option value="Ahemadabad"> Ahemadabad </option>
      <option value="Aizawl"> Aizawl </option>
      <option value="Ajmer"> Ajmer </option>
      <option value="Almora"> Almora </option>
      <option value="Amaravati"> Amaravati </option>
      <option value="Ambala"> Ambala </option>
      <option value="Amritsar"> Amritsar </option>
      <option value="Aurangabad"> Aurangabad </option>
      <option value="Ayodhya"> Ayodhya </option>
      <option value="Badrinath"> Badrinath </option>
      <option value="Bangalore"> Bangalore </option>
      <option value="Bhopal"> Bhopal </option>
      <option value="Bhubaneshwar"> Bhubaneshwar </option>
      <option value="Bikaner"> Bikaner </option>
      <option value="Bilaspur"> Bilaspur </option>
      <option value="Bodhgaya"> Bodhgaya </option>
      <option value="Calangute, Goa"> Calangute, Goa </option>
      <option value="Canacona, Goa"> Canacona, Goa </option>
      <option value="Chandigarh"> Chandigarh </option>
      <option value="Chennai"> Chennai </option>
      <option value="Chittoor"> Chittoor </option>
      <option value="Coimbatore"> Coimbatore </option>
      <option value="Dalhousie"> Dalhousie </option>
      <option value="Daman"> Daman </option>
      <option value="Darjeeling"> Darjeeling </option>
      <option value="Dehradun"> Dehradun </option>
      <option value="Delhi"> Delhi </option>
      <option value="Dharamshala"> Dharamshala </option>
      <option value="Dwarka"> Dwarka </option>
      <option value="Fatehpur Sikri"> Fatehpur Sikri </option>
      <option value="Gandhinagar"> Gandhinagar </option>
      <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>
      <option value="Gurgaon"> Gurgaon </option>
      <option value="Guwahati"> Guwahati </option>
      <option value="Gwalior"> Gwalior </option>
      <option value="Hampi"> Hampi </option>
      <option value="Haridwar"> Haridwar </option>
      <option value="Hyderabad"> Hyderabad </option>
      <option value="Imphal"> Imphal </option>
      <option value="Indore"> Indore </option>
      <option value="Itanagar"> Itanagar </option>
      <option value="Jabalpur"> Jabalpur </option>
      <option value="Jaipur"> Jaipur </option>
      <option value="Jaisalmer"> Jaisalmer </option>
      <option value="Jammu"> Jammu </option>
      <option value="Jhansi"> Jhansi </option>
      <option value="Jodhpur"> Jodhpur </option>
      <option value="Junagadh"> Junagadh </option>
      <option value="Kanpur"> Kanpur </option>
      <option value="Kasauli"> Kasauli </option>
      <option value="Kavaratti"> Kavaratti </option>
      <option value="Kedarnath"> Kedarnath </option>
      <option value="Kohima"> Kohima </option>
      <option value="Kolkata"> Kolkata </option>
      <option value="Kufri"> Kufri </option>
      <option value="Kullu"> Kullu </option>
      <option value="Leh"> Leh </option>
      <option value="Lucknow"> Lucknow </option>
      <option value="Madurai"> Madurai </option>
      <option value="Manali"> Manali </option>
      <option value="Mangalore"> Mangalore </option>
      <option value="Mathura"> Mathura </option>
      <option value="Mumbai"> Mumbai </option>
      <option value="Mussorie"> Mussorie </option>
      <option value="Mysore"> Mysore </option>
      <option value="Nagpur"> Nagpur </option>
      <option value="Nainital"> Nainital </option>
      <option value="Nashik"> Nashik </option>
      <option value="Ooty"> Ooty </option>
      <option value="Panaji, Goa"> Panaji, Goa </option>
      <option value="Patna, Bihar"> Patna, Bihar </option>
      <option value="Portblair"> Portblair </option>
      <option value="Prayagraj"> Prayagraj </option>
      <option value="Puducherry"> Puducherry </option>
      <option value="Pune"> Pune </option>
      <option value="Puri"> Puri </option>
      <option value="Raipur"> Raipur </option>
      <option value="Ranchi"> Ranchi </option>
      <option value="Raurkela"> Raurkela </option>
      <option value="Rishikesh"> Rishikesh </option>
      <option value="Rohtak"> Rohtak </option>
      <option value="Shillong"> Shillong </option>
      <option value="Shimla"> Shimla </option>
      <option value="Silchar"> Silchar </option>
      <option value="Silliguri"> Silliguri </option>
      <option value="Sonipat"> Sonipat </option>
      <option value="Surat"> Surat </option>
      <option value="Tawang"> Tawang </option>
      <option value="Thiruvananthpuram"> Thiruvananthpuram </option>
      <option value="Tirupati"> Tirupati </option>
      <option value="Udaipur"> Udaipur </option>
      <option value="Vadodara"> Vadodara </option>
      <option value="Varanasi"> Varanasi </option>
      <option value="Vijayawada"> Vijayawada </option>
      <option value="Visakhapatnam"> Visakhapatnam </option>
      <option value="Vrindavan"> Vrindavan </option>
      <option value="Warangal"> Warangal </option>
      <option value="Other">Other</option>
    </select>
    <textarea
id={styles["popup__requestField"]}
placeholder="Comments or Special request"
name="comments"
rows="4"
cols="33"
value={comments}
onChange={(e) => setComments(e.target.value)}
required
/>

  </div>
</div>

<button id={styles["popup-button"]} type="submit">
  Get a Callback
</button>
</div>

        
        </form>
      </div>
    )
  );
};

export default CallbackPopup;
