import React, { useState, useEffect } from "react";
import "./photoshoot.css";
import { useHistory } from "react-router";
import Images from "../../All_Images/Images";
import CallbackPopup from "../../mainUtils/CallbackPopup";
import PackageModal from "../package_modal/PackageModal";

export default function BecomeFodrixographer() {
  const [displayModal, setDisplayModal] = useState(false);
  const history = useHistory();
  const [service, setService] = useState("");
  const bookNowClickHandler = () => {
    history.push(`/login`);
  };
  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Best Travel, Prewedding Photographers in India | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Hire a Best Professional Travel photographer in India with Fodrix. Capture Pre wedding, maternity, wedding, family, engagement, or proposal."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute(
      "href",
      "https://www.fodrix.com/photoshoot_services"
    );
  }, []);

  const data = [
    {
      id: 1,
      image: Images.travel,
      title: "Travel Shoot",
      desc: "We've simplified the process of finding you the right travel photographer. You can put down your camera connect with the surroundings.",
      service: "Travel",
    },
    {
      id: 2,
      image: Images.Wedding,
      title: "Wedding Shoots",
      desc: "Professional wedding photography can make capturing your life-changing moments hassle-free. Make your wedding a picture perfect day.",
      service: "Wedding",
    },
    {
      id: 3,
      image: Images.prewedding,
      title: "Pre-Wedding Shoot",
      desc: "Let them see that you're in love and ready to get married through beautiful pictures. Won't it also make you comfortable in front of cameras before your big day?",
      service: "Pre-Wedding",
    },
    {
      id: 4,
      image: Images.baby,
      title: "Baby shoot",
      desc: "Capture your baby's most precious moments. Whether they are newborns or toddlers, we are here to make it easier for you to capture their cute moments.",
      service: "Baby",
    },
    {
      id: 5,
      image: Images.maternity,
      title: " Maternity shoot",
      desc: "Let everyone know that someone is about to arrive in this world. Capture the joyous event of parent-hood with us. Book maternity photoshoots hassle-free.",
      service: "Maternity",
    },
    {
      id: 6,
      image: Images.Family,
      title: "Family Shoot",
      desc: " Create awesome memories with your family. Let our expert photographers provide your beautiful family with a professional yet enjoyable family photoshoot.",
      service: "Family",
    },
    {
      id: 7,
      image: Images.PersonalPortrait,
      title: "Personal Portrait shoot ",
      desc: "Look more professional with a personal portrait photoshoot. Let us help you know all of your finest angles and enhance your portfolio with Fodrix.",
      service: "Personal",
    },
    {
      id: 8,
      image: Images.business,
      title: "Business Shoot ",
      desc: "Business shoots are one of the most important assets of any organisation/company. Create authentic images of your business with us.",
      service: "Business",
    },
    {
      id: 9,
      image: Images.otherService,
      title: "Others",
      desc: "Are you interested in capturing amazing memories? With our incredibly talented photographers, you'll be able to capture all of the memorable moments.",
      service: "Other",
    },
  ];
  return (
    <>
      <div className="photoshoot_home">
        {displayModal && <PackageModal setDisplayModal={setDisplayModal} service={service} />}
        <h1 className="heading_photoshootservices text-center font-weight-700">
          Photoshoot Services
        </h1>

        <div className="grid">
          {data.map((card) => {
            return (
              <div key={card.id} className="grid-items" data-aos="fade-up">
                <img loading="lazy" src={card.image} alt=" not Found" />
                <div className="img-description ">
                  <h3>{card.title}</h3>
                  <p>
                    {card.desc}
                  </p>
                  <div className="read_more">
                    <button
                      onClick={()=>{
                        setService(card.service)
                        bookNowClickHandler();
                        }}
                      className="btn btn-primary"
                      id="readmore_button"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.travel} alt=" not Found" />
            <div className="img-description ">
              <h3>Travel Shoot</h3>
              <p>
                We've simplified the process of finding you the right travel
                photographer. You can put down your camera and can connect with
                the surroundings.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.Wedding} alt=" not Found" />
            <div className="img-description">
              <h3>Wedding Shoots</h3>
              <p>
                Professional wedding photography can make capturing your
                life-changing moments hassle-free. Make your wedding a picture
                perfect day.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.prewedding} alt=" not Found" />
            <div className="img-description">
              <h3>Pre-Wedding Shoot </h3>
              <p>
                Let them see that you’re in love and ready to get married
                through beautiful pictures. Won’t it also make you comfortable
                in front of cameras before your big day?
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.baby} alt=" not Found" />
            <div className="img-description">
              <h3>Baby shoot </h3>
              <p>
                Capture your baby's most precious moments. Whether they are
                newborns or toddlers, we are here to make it easier for you to
                capture their cute moments.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.maternity} alt=" not Found" />
            <div className="img-description">
              <h3> Maternity shoot</h3>
              <p>
                Let everyone know that someone is about to arrive in this world.
                Capture the joyous event of parent-hood with us. Book maternity
                photoshoots hassle-free.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.Family} alt=" not Found" />
            <div className="img-description">
              <h3>Family Shoot</h3>
              <p>
                Create awesome memories with your family. Let our expert
                photographers provide your beautiful family with a professional
                yet enjoyable family photoshoot.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img
              loading="lazy"
              src={Images.PersonalPortrait}
              alt=" not Found"
            />
            <div className="img-description">
              <h3>Personal Portrait shoot </h3>
              <p>
                Look more professional with a personal portrait photoshoot. Let
                us help you know all of your finest angles and enhance your
                portfolio with Fodrix.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.business} alt=" not Found" />
            <div className="img-description">
              <h3>Business Shoot </h3>
              <p>
                Business shoots are one of the most important assets of any
                organisation/company. Create authentic images of your business
                with us.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid-items" data-aos="fade-up">
            <img loading="lazy" src={Images.otherService} alt=" not Found" />
            <div className="img-description">
              <h3>Others </h3>
              <p>
                Are you interested in capturing amazing memories? With our
                incredibly talented photographers, you'll be able to capture all
                of the memorable moments.
              </p>
              <div className="read_more">
                <button
                  onClick={bookNowClickHandler}
                  className="btn btn-primary"
                  id="readmore_button"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <CallbackPopup popup={true} callBackForm={true} />
    </>
  );
}
