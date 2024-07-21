import React, { useEffect } from "react";
import "./become.css";
import "./become_2.css";
import Images from "../../All_Images/Images";

export default function BecomeFodrixographer() {
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Join us as Freelance Photographer |Become a Fodrixographer`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Join Fodrix by showing your photography skills and become a Fodrixographer for the best experience ever."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute(
      "href",
      "https://www.fodrix.com/BecomeFodrixographer"
    );
  }, []);
  return (
    <>
      <div className="heading_become text-center text-weight-700">
        <h1>Become a Fodrixographer</h1>
      </div>
      {/* <div className="sub_heading_become">
        <h3>Why become a fodrixographer?</h3>
      </div> */}

      <div className="main-container">
        <div>
          <img
            src={Images.BecomeFodrixographer}
            className="img_become img-become__new"
            alt=" not Found"
          />
        </div>
        <div className="become">
          <div className="left_become">
            <li>
              <img
                src={Images.receivephotoshoot}
                className="img_icon"
                alt=" not Found"
              />
              <div className="card_content">
                <h4>Receive shoot request</h4>
                <p>
                  We’ll find clients for you for free of cost and as a
                  fodrixographer focus just on the shoot
                </p>
              </div>
            </li>
          </div>
          <div className="left_become">
            <li>
              <img
                src={Images.Earnextra}
                alt=" not Found"
                className="img_icon"
              />
              <div className="card_content">
                <h4>Earn extra income</h4>
                <p>
                  Earn extra while doing your regular work with full freedom to
                  accept or reject a request.
                </p>
              </div>
            </li>
          </div>
          <div className="left_become">
            <li>
              <img
                src={Images.Youshootweedit}
                className="img_icon"
                alt=" not Found"
              />
              <div className="card_content">
                <h4>You shoot, we edit</h4>
                <p>
                  Just do the shoot, send us the pictures and rest we’ll take
                  care.
                </p>
              </div>
            </li>
          </div>

          <div className="left_become">
            <li>
              <img
                src={Images.JoinCommunity}
                alt=" not Found"
                className="img_icon"
              />
              <div className="card_content">
                <h4>Join our community</h4>
                <p>
                  Join our community of professional photo- graphers nationwide
                  by becoming a fodrixographer.
                </p>
              </div>
            </li>
          </div>
          <div className="left_become">
            <li>
              <img
                src={Images.Diversity}
                className="img_icon"
                alt=" not Found"
              />
              <div className="card_content">
                <h4>Diversify your portfolio</h4>
                <p>
                  Shoot variety of events other than your usual shoots like
                  travel shoot, corporate shoot, product shoot, etc.
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
     
     <div style={{backgroundColor:"#f7fbfd"}}>
      <div className="sub_heading_become2">
        <h3> What are we looking for?</h3>
      </div>

      {/* ============ new code =========== */}

      <div className="looking_container">
        <div className="left_part">
          <div className="part1">
            <div className="icon">
              <img
                src={Images.excitedtoshowcity}
                // className="img_icon2"
                alt=" not Found"
              ></img>
            </div>
            <div>
              <h4>Excited to show your city:</h4>
              <p className="becomFodrixographer-p__font">
                You truly love your city and have knowledge about all the
                tourist and photoshoot spots of your city so that travellers get
                an awesome experience.
              </p>
            </div>
          </div>
          <div className="part2">
            <div className="icon">
              <img
                src={Images.professionalism}
                alt=" not Found"
              // className="img_icon2"
              ></img>
            </div>
            <div>
              <h4>Professionalism:</h4>
              <p className="becomFodrixographer-p__font">
                {" "}
                Arrive the shoot location 30 min prior to the shoot time. Have a
                professional behaviour towards the clients. Submit the
                photographs within 24 hours after the shoot.
              </p>
            </div>
          </div>
        </div>
        <div className="right_part">
          <div className="part1">
            <div className="icon">
              <img
                src={Images.photographyequip}
                alt=" not Found"
              // className="img_icon2"
              ></img>
            </div>
            <div>
              <h4>Photography equipments:</h4>
              <p className="becomFodrixographer-p__font">
                As fodrixographer, you are required to have your own
                professional photography equipments, including backup batteries,
                memory card_content and camera.
              </p>
            </div>
          </div>
          <div className="part2">
            <div className="icon">
              <img
                src={Images.stayupdated}
                alt=" not Found"
              // className="img_icon2"
              ></img>
            </div>
            <div>
              <h4>Stay updated:</h4>
              <p className="becomFodrixographer-p__font">
                Be up to date about latest tourist and photoshoot spots,
                photography gears and photography styles.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* ================= */}
      <div className="main-container container-3" style={{backgroundColor:"#eff6f8" , paddingTop:"20px"}}>
        <div className="sub_heading_become head3">
          <h3>How does it work?</h3>
        </div>
        <div>
          <img
            src={Images.Howdoesitworks}
            alt=" not Found"
            className="img_become"
          />
        </div>
        <div className="list_right">
          <ol type="1">
            <li>
              <div className="list_right_wrapper">
                <h4> Get notified</h4>
                <p className="desc_how">
                  We’ll inform you about the shoot request based on your location
                  and you’ll preserve right to accept or reject the shoot request.
                </p>
              </div>
            </li>

            <li>
              <div className="list_right_wrapper">
                <h4> Know your client</h4>
                <p className="desc_how">
                  Get in touch with your client and discuss everything about the
                  shoot in detail.
                </p>
              </div>
            </li>
            <li>
              <div className="list_right_wrapper">
                <h4> Shoot day</h4>
                <p className="desc_how">
                  Reach the shoot location 30 minutes prior to the shoot time.
                  Meet your clients and capture their awesome moments.
                </p>
              </div>
            </li>

            <li>
              <div className="list_right_wrapper">
                <h4>Upload the photographs</h4>
                <p className="desc_how">
                  Send us all the photographs within 24 hours after the shoot and
                  get back to your daily routine
                </p>
              </div>
            </li>
            <li>
              <div className="list_right_wrapper">
                <h4>Get paid</h4>
                <p className="desc_how">
                  Receive the payment after you submit the photography work to us.
                </p>{" "}
              </div>
            </li>
          </ol>
        </div>
      </div>
      {/* =================== */}
      <div className="last">
        <h3>Do you want to be a Fodrixographer?</h3>
        <p className="last_part">Join our organisation as a photographer</p>

        <div className="form_content text-center">
          <button type="button" className="button_form">
            <a
              href="https://forms.gle/bmyKvQhk7PHmSxuu6"
              style={{ color: "white", textDecoration: "None" }}
              target="blank"
              rel="noreferrer"
            >
              Apply Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
