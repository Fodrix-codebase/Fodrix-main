import React from "react";
import "../css/Home.css";
import "../plugins/home";
import Photoshoot from "./homePage_components/Photoshoot";
import Testimonials from "./testinomial_components/Testinomials";
import BookPhotographer from "./homePage_components/BookPhotographer";
import ExploreHome from "./homePage_components/ExploreHome";
import Searchbox from "./Searchbox_component/Searchbox";
import "aos/dist/aos.css";
import Images from "../All_Images/Images";
import Footercity from "./footer_components/FooterComponent/FooterCity";
import Whatsapp from "./Whatsapp";
import { useState } from "react";
import { useEffect } from "react";
import CallbackPopup from "../mainUtils/CallbackPopup";
import { useHistory } from "react-router";
import OurPartners from "./homePage_components/OurPartners";
import BackToTop from "./BackToTop";
export default function Home() {
  const [popupDisplay, setPopupDisplay] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("popupShown")) {
      setTimeout(() => {
        setPopupDisplay(true);
        sessionStorage.setItem("popupShown", "true");
      }, 6000);
    }
  }, []);



  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `Fodrix - Best professional photographer agency in India`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "Fodrix connects you to a team of best professional photographers in India famous for shoots of travel, pre-wedding, wedding, maternity, business and much more."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/");
  }, []);

  const history = useHistory();
  const [city, setCity] = useState("");

  const handleClick = () => {
    if (city) {
      localStorage.setItem("city", city);
      history.push(`/City_Home/${city}`);
    }
  };

  const [homeCity, sethomeCity] = useState(localStorage.getItem("city"));
  return (
    <>
      {/* <Quote
        className="quote_popup"
        popup={popupDisplay}
        closePopup={setPopupDisplay}
      /> */}
      <CallbackPopup
        popup={popupDisplay}
        closePopup={setPopupDisplay}
        callBackForm={false}
      />
      <Whatsapp />
      <BackToTop />
      <div id="toppage" className="container-fluid">
        <div className="row">
          <div className="Top-band_home"> </div>{" "}
        </div>{" "}
      </div>
      <div id="container-top">
        {/* <img
          loading="eager"
          id="home_image"
          src={home_image}
          alt="First slide"
        /> */}
        <div id="center-search">
          <div id="center-text">
            <h1>Hire a professional photographer anywhere in India </h1>
            <p> We capture your memories forever </p>
          </div>
          <div id="search_home" className="search_home">
            <Searchbox />
          </div>{" "}
        </div>{" "}
      </div>
      <div className="secondDiv_home">
        <p className="div2head_home text-center">
          Professional Photographers for your remarkable memories:
        </p>{" "}
        <p className="div2subhead_home ">
          Well experienced and best photographer's in India from over 100 +
          cities. So may it be a Solo - Trip or Group - outing, we are here to
          make your memories more beautiful and eventful.Our photographers are
          exceptionally talented and will capture the best of your moments for
          you! We without a doubt are the best photography agency in India and
          promise to give you an experience of a lifetime.
        </p>{" "}
      </div>
      <div className="aboutus_home">
        <div className="animation_home">
          <h1 className="heading_aboutus_home">Who are we? What do we do?</h1>
          <p className="sub_heading_aboutus_home">
            We are Fodrix and we love capturing your memorable moments! We
            understand the importance of the feeling of the time and that's why
            we work hard to click your memories so that in future you could sit
            back and relive those glorious memories! enabling everyone to book a
            great photographer affordably, in the easiest way possible.
          </p>{" "}
        </div>{" "}
        <div className="videoanimation_home">
          {" "}
          {/* <button className="videoBtn_home" onClick={() => setLgShow(true)}>
                        <i class="far fa-play-circle fa-2x"></i>
                      </button> */}{" "}
        </div>{" "}
        <div className="desc_home">
          <div>
            <img
              loading="eager"
              src={Images.Front1}
              className="imageCartoon_home"
              alt="not found"
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="" style={{backgroundColor:"#f7fbfd"}}>
        <Photoshoot />
      </div>{" "}
      <div className="p-3" >
        <BookPhotographer />
      </div>
     
      <h1 className="heading_Explore text-center">
        Explore Our Top Destinations{" "}
      </h1>{" "}
      <section class="card-container-explore-home" style={{backgroundColor:"#eff6f8"}} >
      
  <ExploreHome
    imgsrc={Images.Mumbai}
    title="Mumbai"
    description="Mumbai, the city of dreams and home to the famous Bollywood industry is a city based in Maharashtra. Through the years, the city changed itself from Back-in-the-day Bombay to Modern Mumbai. From rich to poor, Mumbai has soaked everyone who wants to get in."
    onClick={() => handleClick("Mumbai")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
  <ExploreHome
    imgsrc={Images.banglore}
    title="Bangalore"
    description="The city which lies in the South Indian state of India, Bengaluru is the marvellous capital of the state of Karnataka. The city is famous for its dazzling nightlife, Silicon Valley of India, and high-tech business industry. The city holds prominent history with a bonus of modernity."
    onClick={() => handleClick("Bangalore")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
  <ExploreHome
    imgsrc={Images.ahmedabad}
    title="Ahmedabad"
    description="The glorious city of Ahmedabad situated in the heart of Gujarat state is one of the most amazing and old cities of India. The architecturally rich city is also India's first UNESCO World Heritage City. It is a perfect blend of a modernistic city and historical heritage."
    onClick={() => handleClick("Ahmedabad")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
  <ExploreHome
    imgsrc={Images.pune}
    title="Pune"
    description="Based in Maharashtra, Pune is an awesomely stunning city and one of the most popular cities in India. The city is famous for its beauty, manufacturing hub of India, charm, as well as prominent history. From the 1950s, Pune was known as the Education & IT Hub of India."
    onClick={() => handleClick("Pune")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
  <ExploreHome
    imgsrc={Images.kolkata}
    title="Kolkata"
    description="From the journey of Calcutta to Kolkata, the city has remarkably changed and made it to the top cities of India. Based in the state of West Bengal, Kolkata has a huge series of architectural and cultural aspects. The city is also the land of many historical events!"
    onClick={() => handleClick("Kolkata")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
  <ExploreHome
    imgsrc={Images.chennai}
    title="Chennai"
    description="Capital to the state of Tamil Nadu, Chennai is a beautiful city based in the South part of India. Chennai is not only a place for holy temples but also full of delicious local food all around the city. Particularly, it is famous for shopping; the city is filled with diverse shopping malls."
    onClick={() => handleClick("Chennai")}
    buttonlink="/City_Home/${city}"
    button="Explore"
  />
</section>

      {/* temporarily commented once the api is complete we'll uncomment it */}
      {/* <BlogsHome /> */}
      {/* <Quote /> */}
      <CallbackPopup popup={true} callBackForm={true} />
     <div style={{backgroundColor:"#eff6f8", padding:"10px"}} >
     <OurPartners />
     </div>
      
      <Testimonials />
      <Footercity />
    </>
  );
}
