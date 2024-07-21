import React from "react";
import { useState } from "react";
// import { questions } from "./Faqdata";
import "./faq.css";
const Faq2 = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="faq_components">
        <div className="faqContent">
          <div
            className="main-heading_faq2 container-fluid"
            onClick={() =>
              setShow((prevState) => {
                return !prevState;
              })
            }
          >
            <h3>{question}</h3>
            <p
              className="Show-hide-faq"
              onClick={() =>
                setShow((prevState) => {
                  return !prevState;
                })
              }
            >
              {show ? (
                <i class="fas fa-angle-up"></i>
              ) : (
                <i class="fas fa-angle-down"></i>
              )}
            </p>
          </div>

          {show && <p className="answers">{answer}</p>}
        </div>
      </div>
    </>
  );
};
export default Faq2;
