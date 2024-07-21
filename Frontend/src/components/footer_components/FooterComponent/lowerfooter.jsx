import React from "react";
import "../Footer.css";
import Images from "../../../All_Images/Images";

export default function Lowerfooter() {
  return (
    <>
      <div className="footer-lastpart" id="footer">
        <div className="row-footer-components">
          <div className="footer-last1">
            <img src={Images.fodrixiconnew} height="50" alt=" not Found" />
          </div>
          <p className="para_footer ">
            &#169;Copyright 2021 Fodrix Pvt.Ltd. All right reserved.
          </p>

          <p className="para_footercontent ">
            All photos are subjected to copyright and may not be used without
            written consent from Fodrix
          </p>
          <p className="para_footercontentlast ">
            <a href="/tNc"> Terms and Conditions</a> |
            <a href="/privacyPolicy">Privacy Policy </a>|
            <a href="/cancellationPolicy"> Cancellation Policy</a>
          </p>
          <div className="coll-contact">
            <div className="lowerFooter-contactDetails">
              Call: +91-7020147576 | support@fodrix.com
            </div>
            {/* <div>support@fodrix.com</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
