$(document).ready(function () {
  // Initializing slide / carousel

  $(".carousel-landing").slick({
    infinite: true,
    speed: 1000,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".carousel-category").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // $(window).resize(function (e) {
  //   if ($(window).width() <= 576) {
  //     // console.log($(window).)
  //     $(".carousel-category").slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     });
  //   }
  // });

  $(".carousel-about").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // Side drawer events

  $(".hamburger").click(function () {
    $(".menu-sm").addClass("active");
    $(".backdrop").addClass("active");
    $("body").addClass("inactive");
  });

  $(".close-menu-btn").click(function () {
    $(".menu-sm").removeClass("active");
    $(".backdrop").removeClass("active");
    $("body").removeClass("inactive");
  });

  $(".backdrop").click(function () {
    $(".menu-sm").removeClass("active");
    $(".backdrop").removeClass("active");
    $("body").removeClass("inactive");
  });

  $("[name='auth']").change(function () {
    var id = this.id;
    if (id === "sign-up") {
      $(".for-signin").addClass("hide");
      $(".for-signup").removeClass("hide");
    } else if (id === "sign-in") {
      $(".for-signup").addClass("hide");
      $(".for-signin").removeClass("hide");
    }
  });

  $(".answer-toggler").click(function () {
    $(this).next().slideToggle();
  });

  function progress(done, current, divHide, divShow) {
    $("." + done).addClass("done");
    $("." + current).addClass("active");
    $("." + divHide).removeClass("show");
    $("." + divHide).addClass("hide");
    $("." + divShow).addClass("show");
  }

  $(".to-delivery").click(function () {
    progress("auth", "delivery", "login-signup", "delivery");
  });

  $(".to-billing").click(function () {
    progress("delivery", "billing", "delivery", "billing");
  });

  $(".to-payment").click(function () {
    progress("billing", "order", "billing", "payment");
  });
});
