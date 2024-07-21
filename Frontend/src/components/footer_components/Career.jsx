import React, { useEffect, useRef, useState } from "react";
import CallbackAlert from "../../mainUtils/CallbackAlert";

import axios from "axios";
import "../contactus_components/contact.css";
import "./become.css";
import "./career.css";

export default function Career() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Career | Fodrix`;

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/Career");
  }, []);
  const [alertDisplay, setAlertDisplay] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
      resumeLink, // Include the resume link directly
    };

    try {
      await axios.post("http://localhost:5000/career", formData);

      setAlertDisplay(true);

      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setResumeLink("");
        setAlertDisplay(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };



  return (
    <>
      <div className="main">
        <h1>Work at Fodrix</h1>
        {/* <p className="">
          Grow your network, life skills, practical knowledge and experience at
          India’s fastest growing startup in photography industry.
        </p> */}
      </div>
      <div className="join">
        Want to join Fodrix as a photographer?
        <a
          href="https://forms.gle/bmyKvQhk7PHmSxuu6"
          style={{ color: "#007bff", textDecoration: "None" }}
          target="blank"
        >
          {" "}
          Apply Here{" "}
        </a>
      </div>
      {/* <div className="image_space">
        <img src="https://lh3.googleusercontent.com/proxy/5CD4NzxGzuk8u6PGRJ1CdsWpKOdFOe2LmsZ2bdTqUPhrapzSmbz5N1BXg484L7zG2OyZATOaOdzmjeYOpgsPvC9w5i937TVc9j_RG4YAVokK8jXUJzKJK2qAJco"
  className="space"  alt=" not Found"/>
      </div> */}

      <div className="second">
      
          We are a young team of super talented professionals and we look
          forward to working with you
       
      </div>
      <div className="send">
        Send us your resume and we’ll get back to you
      </div>
      {/* <div className="upload_btn">
        <label for="file">Upload Resume</label>
        <input type="file" id="file" className="input_resume" />
      </div> */}



      {alertDisplay && <CallbackAlert />}
      <div className="main_container_ctus">
        <div className="container_ctus">
          <div className="content_ctus">
            <div className="left-side_ctus">
              <div className="address details_ctus">
                <i className="fas fa-handshake" />
                <div className="topic">
                  <h4>Social Media</h4>
                  <div className="social_ctus">
                    <a href="https://www.facebook.com/fodrix" target="_blank">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/fodrixx/" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/fodrixx" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com/company/fodrix/" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="phone details_ctus">
                <i className="fas fa-phone-alt" />
                <div className="topic">Phone</div>
                <div className="text-one">+91-7020147576</div>
              </div>
              <div className="email details_ctus">
                <i className="fas fa-envelope" />
                <div className="topic">Email</div>
                <div className="text-one">support@fodrix.com</div>
              </div>
            </div>
            <div className="right-side_ctus">
              <h1 className="topic-text">Grow with Fodrix</h1>
              <p className="topic_para">
                Grow your network, life skills, practical knowledge and experience at
          India’s fastest growing startup in photography industry.
              </p>
              <form id="careerForm" onSubmit={handleSubmit}>
                <div className="input-box_ctus">
                <input
            type="text"
            placeholder="Your name"
            id="contactname"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
                </div>
                <div className="input-box_ctus">
                <input
            type="email"
            placeholder="Your email"
            id="contactemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
                </div>
               
               
                <div className="input-box_ctus">
                <input
            type="phone"
            placeholder="Your Phone number"
            id="contactphone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
                </div>


                <div className="input-box_ctus">
                <input
            type="text"
            placeholder="Your Resume link"
            id="contactphone"
      value={resumeLink}
      onChange={(e) => setResumeLink(e.target.value)}
      required
          />
                </div>



                <div className="input-box_ctus message-box">
                  <textarea
                    name="message"
                    id="msg"
                    cols={30}
                    rows={10}
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    
                  />
                </div>

              
        
                <div className="button_ctus">
                  <button type="submit">Send Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}