import $ from "jquery";
import "./login.css";
export default function loginjs() {
  // $(".email-login").hide();
  $(".email-signup").hide();
  $(".login-link").on("click", function () {
    $(".email-signup").fadeOut(20);
    $(".email-login").delay(0).fadeIn(20);
    $("#signup-box-link").removeClass("active");
    $("#signup-box-link").css({
      "background-color": "white",
      color: "Black",
      "font-size": "18px",
      "border-left": "1px solid #ddd",
    });
    $("#login-box-link").addClass("active");
    $("#login-box-link").css({
      "background-color": "#007bff",
      color: "white",
      "font-size": "18px",
      "border-left": "1px solid #ddd",
    });
  });
  $(".signup-link").on("click", function () {
    $(".email-signup").delay(0).fadeIn(20);
    $(".email-login").fadeOut(20);

    $("#signup-box-link").addClass("active");
    $("#signup-box-link").css({
      "background-color": "#007bff",
      color: "white",
      "font-size": "18px",
    });

    $("#login-box-link").removeClass("active");
    $("#login-box-link").css({
      "background-color": "white",
      color: "Black",
      "font-size": "18px",
      "border-left": "1px solid #ddd",
    });
  });
}
