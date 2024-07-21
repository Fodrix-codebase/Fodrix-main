import $ from "jquery";
$(document).ready(function () {
  $(".content").slice(0, 7).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 6).slideDown();
    // if ($(".content:hidden").length == 0) {
    //   $("#loadMore").text("").addClass("");
    // }
  });
});
