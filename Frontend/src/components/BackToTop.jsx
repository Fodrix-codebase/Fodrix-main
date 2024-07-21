import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
  const [showBtT, setshowBtT] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = window.scrollY;

      if (scrolled > 2000) {
        setshowBtT(true);
      } else {
        setshowBtT(false);
      }
    });
  }, [window.scrollY]);
  return (
    <>
      <div id="navright-backToTop">
        {showBtT ? (
          <a href="#navbar">
            <BsChevronUp className="backToTop-icon" />{" "}
          </a>
        ) : (
          <a href="#footer">
            <BsChevronDown className="backToBottom-icon" />{" "}
          </a>
        )}
      </div>
    </>
  );
}

export default BackToTop;
