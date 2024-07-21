import $ from "jquery";
// var citiesByState = {
//     Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
//     Maharashtra: ["Mumbai", "Pune", "Nagpur"],
//     Kerala: ["kochi", "Kanpur"],
//     UttarPradesh: ["Agra", "Aligarh", "Allahdabad", "Ambedkar Nagar", "Amroha"]
// }

// function makeSubmenu(value) {
//     if (value.length == 0) document.getElementById("citySelect").innerHTML = "<option></option>";
//     else {
//         var citiesOptions = "";
//         for (cityId in citiesByState[value]) {
//             citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
//         }
//         document.getElementById("citySelect").innerHTML = citiesOptions;
//     }
// }

// function resetSelection() {
//     document.getElementById("countrySelect").selectedIndex = 0;
//     document.getElementById("citySelect").selectedIndex = 0;
// }

$(document).ready(function () {
  $("#personal_home").click(function () {
    $("#popularBar_home").hide();
    $("#personalBar_home").show();
    $("#businessBar_home").hide();
    $("#personal_home").css("color", "rgb(104, 138, 161)");
    $("#popular_home").css("color", "rgb(189, 189, 189)");
    $("#business_home").css("color", "rgb(189, 189, 189)");
    $("#popularContent_home").hide();
    $("#personalContent_home").show();
    $("#businessContent_home").hide();
  });
  $("#popular_home").click(function () {
    $("#popularBar_home").show();
    $("#personalBar_home").hide();
    $("#businessBar_home").hide();
    $("#popular_home").css("color", "rgb(104, 138, 161)");
    $("#personal_home").css("color", "rgb(189, 189, 189)");
    $("#business_home").css("color", "rgb(189, 189, 189)");
    $("#popularContent_home").show();
    $("#personalContent_home").hide();
    $("#businessContent_home").hide();
  });
  $("#business_home").click(function () {
    $("#popularBar_home").hide();
    $("#personalBar_home").hide();
    $("#businessBar_home").show();
    $("#business_home").css("color", "rgb(104, 138, 161)");
    $("#popular_home").css("color", "rgb(189, 189, 189)");
    $("#personal_home").css("color", "rgb(189, 189, 189)");
    $("#popularContent_home").hide();
    $("#personalContent_home").hide();
    $("#businessContent_home").show();
  });
});

// export function changeBg() {
//     const images = [
//         'url("https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg")',
//         'url("https://www.momondo.com/discover/wp-content/uploads/sites/260/2020/02/DEST_NORWAY_LOFOTEN_GettyImages-1050245738_Universal_Within-usage-period_37137-1500x1312.jpg")',
//         'url("https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2017/08/girlgoneabroad.jpg")',
//         'url("https://www.volunteerlatinamerica.com/up-images/blog-images/solo-travelling.jpg")',
//         'url("https://images.newindianexpress.com/uploads/user/imagelibrary/2020/12/26/w900X450/rz.JPG")',
//         'url("https://www.oberlo.com/media/1605012352-image8.jpg")',
//         'url("https://media.istockphoto.com/photos/beautiful-caucasian-young-woman-travel-outside-the-car-with-wind-in-picture-id972155284?k=6&m=972155284&s=612x612&w=0&h=wW5d1ocSh0_rsVEMzVEbbOdnS4E6muJDLXji3Yfo_KM=")',
//         'url("https://www.ttrweekly.com/site/wp-content/uploads/2018/05/millennial-travellers.png")',
//         'url("https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10019278401.jpg")',
//         'url("https://weddingphotographerinvadodara.com/wp-content/uploads/2020/03/travel-photography-tips-1.jpg")',
//         'url("https://static.toiimg.com/thumb/65292208/Dhankar-Photographer.jpg?width=1200&height=900")',
//         'url("https://cdn.photoworkout.com/wp-content/uploads/2018/06/Travel-Photography-Tips.jpg")',
//         'url("https://iso.500px.com/wp-content/uploads/2016/01/sanfrancisco_cover.jpg")',
//         'url("https://worldoftravelphotography.com/wp-content/uploads/2018/08/Things-I-learned-as-a-travel-photograher.jpg")',
//         'url("https://images.squarespace-cdn.com/content/v1/5558ab9fe4b02d567e71d61f/1509726116486-85EQF18CR8G9TBUJPQJ2/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/pexels-photo-212372.jpeg?format=2500w")',
//         'url("https://www.darter.in/wp-content/uploads/2015/11/camel-desert-jaisalmer.jpg")',
//         'url("https://www.globaltoursinc.com/media/post/image/c/h/china_h.jpg")',
//         'url("https://cdn2.wanderlust.co.uk/media/1115/articles-a-pretty-picture-is-not-enough-it-needs-to-be-original-photo-mike-baird1.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=131455539260000000")'
//     ]
//     const section = document.querySelector('section')
//     const bg = images[Math.floor(Math.random() * images.length)];
//     section.style.backgroundImage = bg;
// }
// setInterval(changeBg, 2000);

// $('#recipeCarousel_home').carousel({
//     interval: 10000
// })

// $('.carousel_home .carousel-item_home').each(function() {
//     var minPerSlide = 3;
//     var next = $(this).next();
//     if (!next.length) {
//         next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     for (var i = 0; i < minPerSlide; i++) {
//         next = next.next();
//         if (!next.length) {
//             next = $(this).siblings(':first');
//         }

//         next.children(':first-child').clone().appendTo($(this));
//     }
// });

// function onFocus(ele) {
//     ele.style.opacity = "1";
// }

// function ofFocus(ele) {
//     ele.style.opacity = "0.6";
// }
