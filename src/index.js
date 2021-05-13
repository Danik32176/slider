jQuery(document).ready(function($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");
  const $projectSlider = $(".projects__cards");
  const $headerLink = $(".header__nav-link");
  const $links = $(".header__nav-links");
  const $arrowUp = $(".arrow-up");

  $headerLink.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 500);
  });
  $menuToggle.on("click", function() {
    $html.toggleClass("overflow-hidden");
    $headerNav.toggleClass("active");
    $menuToggle.toggleClass("active");
  });

  $links.on("click", function() {
    $menuToggle.removeClass("active");
    $headerNav.removeClass("active");
    $html.removeClass("overflow-hidden");
  });

  $(window).on(
    "scroll",
    $.debounce(100, function() {
      if ($(this).scrollTop() > 200) {
        $arrowUp.addClass("active");
      } else {
        $arrowUp.removeClass("active");
      }
    })
  );
  $arrowUp.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $(".slider").slick({
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(window).on(
    "resize",
    $.debounce(200, function() {
      if ($(this).width() > 600) {
        $(".slick-prev").text("");
        $(".slick-next").text("");
      }
    })
  );

  //   настройки для слайдера
  const projectSliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 990,
        settings: "unslick",
      },
    ],
  };
  $projectSlider.slick(projectSliderSettings);

  $(window).on(
    "resize",
    $.debounce(200, function() {
      if (
        $(this).width() < 992 &&
        !$projectSlider.hasClass("slick-initialized")
      ) {
        $projectSlider.slick(projectSliderSettings);
      }
    })
  );

  $(".slick-prev").text("");
  $(".slick-next").text("");
});
