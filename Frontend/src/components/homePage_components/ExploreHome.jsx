import React from "react";
import "../../css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
  duration: 2000,
});
const ExploreHome = (props) => {
  return (
    <>
      <div className="topDestinations_home">
        <div className="grid">
          <div className="card">
            <img loading="lazy" src={props.imgsrc} alt=" not Found" />
            <div className="img-description">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
              <a href={props.buttonlink} onClick={()=>{localStorage.setItem("city", props.title)}}>
                <button className="explore-destination">{props.button}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExploreHome;
