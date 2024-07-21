import React from "react";
import Images from "../../All_Images/Images";
import "./OurTeam.css";

export default function OurTeam() {
  return (
    <>
      <div className="wrapper">
        <h1>Meet Our Team</h1>
        <div className="our_team">
          <div className="team_member team_member1">
            <div className="member_img member_img1">
              <img src={Images.AnkitKesarwani} alt="Not found" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/ankit-kesarwani-183684143/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Ankit Kesarwani</h3>
            <span>Founder & CEO</span>
          </div>

          <div className="team_member team_member2">
            <div className="member_img member_img2">
              <img src={Images.ShubhamWagh} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/shubham-wagh-a6773b1a0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Shubham Wagh</h3>
            <span>Technical Lead</span>
          </div>
          <div className="team_member team_member3">
            <div className="member_img member_img3">
              <img src={Images.Himanshukesharwani} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/sraman-mukherjee-23199b1a7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Himanshu Kesarwani</h3>
            <span>Head of Photography</span>
          </div>
          <div className="team_member team_member4">
            <div className="member_img member_img4">
              <img src={Images.Mohitagrawal} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Mohit Agrawal</h3>
            <span>Head of Travel Photography</span>
          </div>

          <div className="team_member team_member5">
            <div className="member_img member_img5">
              <img src={Images.SramanMukherjeee} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Sraman Mukherjee</h3>
            <span>Developer</span>
          </div>

          {/* <div className="team_member team_member4">
            <div className="member_img member_img4">
              <img src={Images.Atharva} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/atharva-joshi-138a8a224"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Atharva Joshi</h3>
            <span>Developer</span>
          </div> */}

          {/* <div className="team_member team_member5">
            <div className="member_img member_img5">
              <img src={Images.Prateek} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/prateekv2003"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Prateek Vishwakarma</h3>
            <span>Developer</span>
          </div> */}

          {/* <div className="team_member team_member6">
            <div className="member_img member_img6">
              <img src={Images.Deepshikha} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://in.linkedin.com/in/deepshikha2625"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Deepshikha</h3>
            <span>Developer</span>
          </div> */}

          {/* <div className="team_member team_member6">
            <div className="member_img member_img6">
              <img src={Images.SandeepJha} alt="Avatar" />
              <div className="social_media">
                <div className="linkedin item">
                  <a
                    href="https://www.linkedin.com/in/ft-jsandeep"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <h3>Sandeep Jha</h3>
            <span>Developer</span>
          </div> */}
        </div>
      </div>
    </>
  );
}
