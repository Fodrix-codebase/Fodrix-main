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
  const packagePrice = localStorage.getItem("package_price").replace(/,/g, '');

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
    .then((data) => {
    })
    .catch((e) => {
      throw new Error(e);
    });
  // let amount = $("#package").val();
  let amount = parseInt(packagePrice);

  if (amount === "" || amount === null || amount === undefined) {
    // alert("Amount is required");
    swal("Failed", "Amount is required", "error");
  } else {
    // book id
    // $.ajax({
    //   url: url1,
    //   //{ apiKey } + "bookashoot",
    //   data: JSON.stringify({ amount: amount, info: "order_request" }),
    //   contentType: "application/json",
    //   type: "POST",
    //   dataType: "json",
    //   success: function (response) {

    //     //invoked when success
    //     //store the id from response  : statusId
    //   },
    // });

    $.ajax({
      url: url2,
      // { apiKey } + "create_order",
      data: JSON.stringify({ amount: amount, info: "order_request" }),
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function (response) {
        //invoked when success
        if (response.status === true) {
          //open payment form
          let options = {
            key: "rzp_live_SqbK2yknoKLD51",
            amount: amount * 100,

            currrency: "INR",
            name: "Fodrix",
            description: "Payment",
            // image:
            //   "https://media-exp1.licdn.com/dms/image/C560BAQER8YRjR9JiXw/company-logo_200_200/0/1625827442861?e=1634169600&v=beta&t=XxqwUr-hhAo59BAUgBOIz4dcWHoylOkDgUZAFv7kN7I",

            // order_id: response.id,

            handler: function (response) {
              // call api updateshoot and use the id which is returned by the bookashoot api.
              swal("Congrats", "Payment successful", "success");
            },

            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          // let rzp = new Razorpay(options);
          const rzp = new window.Razorpay(options);
          // const rzp = new window.Razorpay(options);
          rzp.on("payment.failed", function (response) {
            swal("Failed", "Payment failed", "error");
          });

          rzp.open();
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
