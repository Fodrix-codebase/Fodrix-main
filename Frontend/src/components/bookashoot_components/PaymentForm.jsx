import React from "react";
import packageselect from "../Dashboard_components/Userdashboard";
console.log("Above package amount");

console.log("below package amount");
export default function Payment_form(props) {
  return (
    <>
      <div class="row">
        <div class="col-lg-4 mx-auto">
          <div class="card ">
            <div class="card-header">
              <div class="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                <h2 className="my-3 text-center">Payment</h2>

                <div class="form-group">
                  <input
                    type="text"
                    className="form-control container"
                    id="payment_field"
                  />
                  {packageselect}
                </div>
                <div className="text-center">
                  <button
                    // onClick={paymentStart}
                    id="btn_payment"
                    className="btn btn-success my-3"
                  >
                    Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
