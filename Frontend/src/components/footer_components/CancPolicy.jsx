import React from "react";
import { Link } from "react-router-dom";
import "../../css/canc-policy.css";

export default function CancPolicy() {
  return (
    <>
      <div class="section">
        <div class="container">
          <div class="content-section">
            <div class="image-section"></div>
            <div class="title title_2">
              <h1>Cancellation Policy</h1>
            </div>
            <div className="cancPolicyContent">
              <h3>BOOKING CANCELLED BY THE CLIENT</h3>
              <p>
                To cancel a shoot, the client must call or email Fodrix. A
                client may cancel a scheduled shoot upon the following
                conditions:
              </p>
              <p>
                1 - If you cancel the booking at least 30 days prior to the date
                of the shoot, a full refund will be done.
              </p>
              <p>
                2 -If you cancel the booking at least 7 days prior to the date
                of the shoot, 80% refund will be done. 20% payment will be kept
                as service charges.
              </p>
              <p>
                3 - No refund will be done if you cancel the shoot within 7 days
                prior to the shoot day.
              </p>
            </div>
            <div class="cancPolicyContent">
              <h3>BOOKING RESCHEDULED BY THE CLIENT</h3>
              <p>
                {" "}
                In case of rescheduling, the client must call or email Fodrix. A
                client may reschedule the shoot on the following conditions:-
              </p>

              <p>
                1 - Rescheduling can be done a minimum of 7 days prior to the
                shoot.
              </p>

              <p>
                2 - No shoot will be rescheduled within 7 days prior to the
                shoot.
              </p>

              <p>3 - Rescheduling can only be postponed and not preponed.</p>

              <p>
                4 - The client can reschedule the location or the time or both,
                of the shoot.
              </p>
            </div>
            <div class="cancPolicyContent">
              <h3>BOOKING CANCELLED AND/OR RESCHEDULED BY FODRIX</h3>
              <p>
                1 - Fodrix will try its level best to provide the service as
                mentioned but due to many reasons we can cancel or reschedule
                your booking. Fodrix reserves all rights to cancel your shoot.
                In case Fodrix cancels the shoot, you will be informed as early
                as possible.
              </p>

              <p>
                2 - A full refund will be given if Fodrix cancels the shoot.
                Moreover, as compensation, you will be given a 10% discount on
                your next booking.
              </p>

              <p>
                3 - In case of act of God, Fodrix will not be liable for any
                loss and the policy will be void at the same time.
              </p>
            </div>
            <br />
            <br />

            <div className="last_para">
              <Link to="/tNc">Terms and Conditions</Link> <span>|</span>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
