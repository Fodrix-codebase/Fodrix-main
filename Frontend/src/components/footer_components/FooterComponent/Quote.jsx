import React from "react";
import "./Quote.css";

const Quote = (props) => {
  return (
    // props.popup && (
    // <div className="quote_popup__container">
    // <div className={props.className}>
    <div className="quotecontainer">
      {/* <button
        onClick={() => {
          props.closePopup(false);
        }}
      >
        close
      </button> */}
      <div className="quotecontainer">
        <h1>Get a Callback</h1>
      </div>
      <div className="inputs">
        <form>
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="Name"
            required
          />

          <input
            placeholder="Email"
            id="Email"
            type="email"
            name="Email"
            required
          />

          <input
            placeholder="Mobile"
            id="mobile"
            type="text"
            name="mobile"
            required
          />

          <fieldset id="typeOfPhotoshoot">
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <h4 style={{ padding: "10px" }}>Type of Photoshoot</h4>
            </div>
            <div id="field1">
              <label for="Travel">Travel</label>
              <input
                type="radio"
                id="Travel"
                value="Travel Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="wedding">Wedding</label>
              <input
                type="radio"
                id="wedding"
                value="Wedding Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="business">Business</label>
              <input
                type="radio"
                id="business"
                value="Business Shoot"
                name="typeOfPhotoshoot"
              />
            </div>
            <div id="field2">
              <label for="prewed">Pre-Wedding</label>
              <input
                type="radio"
                id="prewed"
                value="Pre Wedding Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="baby">Baby</label>
              <input
                type="radio"
                id="baby"
                value="Baby Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="maternity">Maternity</label>

              <input
                type="radio"
                id="maternity"
                value="Maternity Shoot"
                name="typeOfPhotoshoot"
              />
            </div>
            <div id="field3">
              <label for="family">Family</label>
              <input
                type="radio"
                id="family"
                value="Family Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="personal">Personal</label>
              <input
                type="radio"
                id="personal"
                value="Personal Portrait Shoot"
                name="typeOfPhotoshoot"
              />
              <label for="other">Other</label>
              <input
                type="radio"
                id="other"
                value="Other"
                name="typeOfPhotoshoot"
              />
            </div>
          </fieldset>

          <input
            placeholder="City"
            list="destination_list"
            type="text"
            name="city"
            id="city_name"
          />
          <datalist id="destination_list">
            <option value="Agartala"> Agartala </option>{" "}
            <option value="Agra"> Agra </option>{" "}
            <option value="Ahemadabad"> Ahemadabad </option>{" "}
            <option value="Aizawl"> Aizawl </option>{" "}
            <option value="Ajmer"> Ajmer </option>{" "}
            <option value="Almora"> Almora </option>{" "}
            <option value="Amaravati"> Amaravati </option>{" "}
            <option value="Ambala"> Ambala </option>{" "}
            <option value="Amritsar"> Amritsar </option>{" "}
            <option value="Aurangabad"> Aurangabad </option>{" "}
            <option value="Ayodhya"> Ayodhya </option>{" "}
            <option value="Badrinath"> Badrinath </option>{" "}
            <option value="Bangalore"> Bangalore </option>{" "}
            <option value="Bhopal"> Bhopal </option>{" "}
            <option value="Bhubaneshwar"> Bhubaneshwar </option>{" "}
            <option value="Bikaner"> Bikaner </option>{" "}
            <option value="Bilaspur"> Bilaspur </option>{" "}
            <option value="Bodhgaya"> Bodhgaya </option>{" "}
            <option value="Calangute, Goa"> Calangute, Goa </option>{" "}
            <option value="Canacona, Goa"> Canacona, Goa </option>{" "}
            <option value="Chandigarh"> Chandigarh </option>{" "}
            <option value="Chennai"> Chennai </option>{" "}
            <option value="Chittoor"> Chittoor </option>{" "}
            <option value="Coimbatore"> Coimbatore </option>{" "}
            <option value="Dalhousie"> Dalhousie </option>{" "}
            <option value="Daman"> Daman </option>{" "}
            <option value="Darjeeling"> Darjeeling </option>{" "}
            <option value="Dehradun"> Dehradun </option>{" "}
            <option value="Delhi"> Delhi </option>{" "}
            <option value="Dharamshala"> Dharamshala </option>{" "}
            <option value="Dwarka"> Dwarka </option>{" "}
            <option value="Fatehpur Sikri"> Fatehpur Sikri </option>{" "}
            <option value="Gandhinagar"> Gandhinagar </option>{" "}
            <option value="Gangtok, Sikkim"> Gangtok, Sikkim </option>{" "}
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
            <option value="Panaji, Goa"> Panaji, Goa </option>{" "}
            <option value="Patna, Bihar"> Patna, Bihar </option>{" "}
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
            <option value="Thiruvananthpuram"> Thiruvananthpuram </option>{" "}
            <option value="Tirupati"> Tirupati </option>{" "}
            <option value="Udaipur"> Udaipur </option>{" "}
            <option value="Vadodara"> Vadodara </option>{" "}
            <option value="Varanasi"> Varanasi </option>{" "}
            <option value="Vijayawada"> Vijayawada </option>{" "}
            <option value="Visakhapatnam"> Visakhapatnam </option>{" "}
            <option value="Vrindavan"> Vrindavan </option>{" "}
            <option value="Warangal"> Warangal </option>{" "}
            <option value="Other">Other</option>{" "}
          </datalist>

          <textarea
            id="request"
            placeholder="Comments or Special request"
            name="request"
          ></textarea>
          <button type="submit">Get a Callback</button>
        </form>
      </div>
    </div>
    // </div>
  );
  // );
};

export default Quote;
