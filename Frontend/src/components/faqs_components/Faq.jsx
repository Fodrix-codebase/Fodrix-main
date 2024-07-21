import React, { useEffect } from "react";
import "./faq.css";
import { questions } from "./Faqdata";
import Faq2 from "./Faq2";
const Faq = () => {
  // const [data, setData] = useState(questions);
  // const [show, setbtn] = useState(false);

  useEffect(() => {
    const title = document.querySelector("title");
    title.innerText = `FAQ's | Fodrix`;

    const desc = document.querySelector("meta[name='description']");
    desc.setAttribute(
      "content",
      "FAQ's regarding our best photography services and photographers."
    );

    const canonical = document.querySelector("link[rel='canonical']");
    canonical.setAttribute("href", "https://www.fodrix.com/FAQ");
  }, []);
  return (
    <>
      <section className="main-div-faq ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-2">
              <h1 className="heading_faqs">FAQs </h1>

              {questions.map((curElem) => {
                return <Faq2 key={curElem.id} {...curElem} />;
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <a href="#" id="loadMore">
        View More
      </a> */}
    </>
  );
};

export default Faq;
