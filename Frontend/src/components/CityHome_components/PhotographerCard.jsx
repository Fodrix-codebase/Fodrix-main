import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import CallbackPopup from "../../mainUtils/CallbackPopup";
import styles from "./PhotographerCard.module.css";
// import Images from "../../All_Images/Images";

const MAX_BIO_WORDS = 35;
const PhotographerCard = (props) => {
  const [popupDisplay, setPopupDisplay] = useState(false);
  const handleRequestToBook = () => {
  
  // const popupContainer = document.getElementById("CallbackPopup_popupCallbackContainer__inner__J0twW");
  // if (popupContainer) {
  //   popupContainer.scrollIntoView({ behavior: "smooth" });
  // }
  setPopupDisplay(true);
};

  const truncateBio = (bio) => {
    const words = bio.split(" ");
    if (words.length > MAX_BIO_WORDS) {
      return words.slice(0, MAX_BIO_WORDS).join(" ") + "...";
    }
    return bio;
  };

  const truncatedBio = truncateBio(props.description);
  

  const imageUrls = props.displayImages;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightboxFromButton = () => {
    console.log("Button clicked");
    setIsLightboxOpen(true);
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevSlide = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setPhotoIndex((prevIndex) =>
      (prevIndex + 1) % imageUrls.length
    );
    setActiveImageIndex((prevIndex) =>
      (prevIndex + 1) % imageUrls.length
    );
  };
  
  
  return (

    <> 
    <div className= {styles["card-container"]}>
      <div className={styles["image-slider__container"]}>
      <div className={styles["image-box"] + (activeImageIndex === 0 ? ` ${styles["active-slide-0"]}` : activeImageIndex === 1 ? ` ${styles["active-slide-1"]}` : activeImageIndex === 2 ? ` ${styles["active-slide-2"]}` : activeImageIndex === 3 ? ` ${styles["active-slide-3"]}` : '')}>
  {imageUrls.map((image, id) => (
    <div
      className={`${styles["image"]} ${styles["lightbox-image"]}`}
      key={id}
      onClick={() => openLightbox(id)}
    >
      <img src={image} alt="" />
    </div>
  ))}
</div>
        <button
          className={`${styles["arrow-button"]} ${styles["prev-button"]}`}
          onClick={prevSlide}
        >
        &#11164;
        </button>
        <button
          className={`${styles["arrow-button"]} ${styles["next-button"]}`}
          onClick={nextSlide}
        >
        &#10148;
        </button>
      </div>

  
      <div className={styles["containertext"]}>
      <h3 style={{margin:" 20px"}}>{props.firstName}</h3>
      <div className={styles["image-container"]}>
    <img
      className={styles["image-container__img"]}
      src={props.profilePic}
    />
  </div>
  
      </div>

      
      <div className={styles["lower-container"]}>
        {/* <div>
          <h3>{props.name}</h3>
          <h4>{props.location}</h4>
        </div> */}
        <div>
          <p className="text-justify">{truncatedBio}</p>
        </div>
       
       <div>
       <button className={styles["request-button"]} onClick={handleRequestToBook}>
        Request to Book {props.firstName}
        </button>
        <button className={styles["request-button"]} onClick={openLightboxFromButton}>
        View Portfolios
        </button>
       </div>
       

        <div>
          {/* <a href="#" className={styles.btn}>
            View profile
          </a> */}
        </div>
      </div>
    
      <CallbackPopup
    popup={popupDisplay}
    closePopup={setPopupDisplay}
    callBackForm={false}
  />



      {isOpen && (
  <Lightbox
    mainSrc={imageUrls[photoIndex]}
    nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
    prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
    onCloseRequest={closeLightbox}
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
    }
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % imageUrls.length)
    }
  />
)}

{isLightboxOpen && (
  <Lightbox
    mainSrc={imageUrls[photoIndex]}
    nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
    prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
    onCloseRequest={() => setIsLightboxOpen(false)} // Close lightbox on request
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
    }
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % imageUrls.length)
    }
  />
)}


<CallbackPopup popup={true} callBackForm={true} />

    </div>
    </>
  );
};

export default PhotographerCard;
