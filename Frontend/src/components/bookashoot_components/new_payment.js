import $ from "jquery";
import swal from "sweetalert";
let apiKey = process.env.REACT_APP_CITY_HOME;
// const url1 = apiKey + "bookashoot";
const url2 = apiKey + "create_order";
export function paymentStore() {
  if (document.getElementById("p3999") !== undefined) {
    localStorage.setItem("price", document.getElementById("p3999").value);
    // var price = localStorage.getItem("price");
  }
}

function paymentStart() {
  // call api bookashoot - it will return the id for the same payment
  const firstName = localStorage.getItem("first_name");
  const email = localStorage.getItem("email");
  const mobile = localStorage.getItem("mobile");
  const city = localStorage.getItem("city");
  const bookingDate = localStorage.getItem("bookingdate");
  const bookingTime = localStorage.getItem("bookingtime");
  const photoshootPackage = localStorage.getItem("c_package");
  const photoshootService = localStorage.getItem("service");
  const packagePrice = localStorage.getItem("package_price").replace(/,/g, "");

  let apiURL = "https://api.fodrix.com/bookashoot";
  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      c_name: firstName,
      c_email: email,
      c_mobile: mobile,
      location: city,
      date: bookingDate,
      time: bookingTime,
      user_services1: photoshootService,
      package_price: parseInt(packagePrice),
      c_package: photoshootPackage,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((e) => {
      throw new Error(e);
    });
  // let amount = $("#package").val();
  let amount = parseInt(packagePrice);

  if (amount === "" || amount === null || amount === undefined) {
    // alert("Amount is required");
    swal("Failed", "Amount is required", "error");
  } else {

    $.ajax({
      url: url2,
      data: JSON.stringify({ amount: amount, info: "order_request" }),
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function (response) {
        if (response.status === true) {
          let order_token = "fjejkdfdbcbafbdbmffab";
          const cashfree = new window.Cashfree();
          const paymentDom = document.getElementById("modal_bg");
          const packageModal = document.getElementById("packageModal");
          const success = function (data) {
            if (data.order && data.order.status == "PAID") {
              swal("Success!");
            } else {
              //order is still active
              swal("Fail! Order is still active.");
            }
          };
          let failure = function (data) {
            swal(data.order.errorText);

            console.log(data)
            console.log(data.order)
          };

          let dropConfig = {
            components: ["order-details", "card", "netbanking", "app", "upi"],
            orderToken: order_token,
            onSuccess: success,
            onFailure: failure,
            style: {
              backgroundColor: "#ffffff",
              color: "#11385b",
              fontFamily: "Lato",
              fontSize: "14px",
              errorColor: "#ff0000",
              theme: "light", //(or dark)
            },
          };
          if (order_token == "") {
            $.ajax({
              url: "fetchtoken.php",
              success: function (result) {
                dropConfig.orderToken = result["order_token"];
                cashfree.initialiseDropin(paymentDom, dropConfig);
              },
            });
          } else {
            cashfree.initialiseDropin(paymentDom, dropConfig);
          }
          packageModal.style.display = "none"
        }
      },
      error: function (error) {
        //invoked when error
        alert("something went wrong");
      },
    });
  }
  return;
}

export default paymentStart;
