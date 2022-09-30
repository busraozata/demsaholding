const menuToggle = document.querySelector(".menu-toggle");
const wrapper = document.querySelector(".wrapper");
const navigation = document.querySelector(".menu-area");
const collapse = document.querySelector(".collapse");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  collapse.classList.toggle("active");
  navigation.classList.toggle("active");
  wrapper.classList.toggle("menu--is-revealed");
  header.classList.toggle("bg-color");
  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

const header = document.querySelector(".header");
const headerHeight = parseInt(window.getComputedStyle(header).height);

document.addEventListener("scroll", function () {
  if (window.scrollY > headerHeight) {
    header.classList.add("header_scroll");
  } else {
    header.classList.remove("header_scroll");
  }
});

var mySwiperCurrent = new Swiper(".mySwiperCurrent", {
  navigation: {
    nextEl: "#swiper-button-next1",
    prevEl: "#swiper-button-prev1",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1500: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

var mySwiperNews = new Swiper(".mySwiperNews", {
  navigation: {
    nextEl: "#swiper-button-next3",
    prevEl: "#swiper-button-prev3",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1500: {
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
  },
});


const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".slide-item");
const slideCount = slides.length;
console.log("iki", slideCount);
fraction.innerHTML = `<span class="start-count"> 01</span> <span class="counter-length">0${slideCount}</span>`;
var swiperBanner = new Swiper(".mySwiperBanner", {
  navigation: {
    nextEl: "#swiper-button-next1",
    prevEl: "#swiper-button-prev1",
  },
  effect: "fade",
  on: {
    slideChange: () => {
      fraction.innerHTML = `<span class="start-count">0${
        swiperBanner.realIndex + 1
      }</span> <span class="counter-length">0${slideCount}</span>`;
    },
  },
});


function toggleTab(e) {
  var hrefVal = $(e).attr("href");
  $(".nav-tabs li").removeClass("active");
  $('.nav-tabs li[data-active="' + hrefVal + '"]').addClass("active");
}

/* ------------------------------------------------------------- */

$(".mega-menu .sub-item .dropdown-item").on("mouseover", function () {
  var imgPath = $(this).attr("data-image");

  $(".mega-menu .img-wrapper img").attr("src", imgPath);
});
/* ------------------------------------------------------------- */

var rect = $("#container")[0].getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };

$("#container").mousemove(function (e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

// Ticker event will be called on every frame
TweenLite.ticker.addEventListener("tick", function () {
  if (mouse.moved) {
    parallaxIt(".slide", 50);
    parallaxIt(".move-img1", -30);
    parallaxIt(".move-img2", 20);
    parallaxIt(".move-img3", -50);
    parallaxIt(".move-img4", 30);
    parallaxIt(".move-img5", -20);
    parallaxIt(".move-img6", 50);
    parallaxIt(".move-img7", -50);
    parallaxIt(".move-img8", -50);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.3, {
    x: ((mouse.x - rect.width / 2) / rect.width) * movement,
    y: ((mouse.y - rect.height / 2) / rect.height) * movement,
  });
}

$(window).on("resize scroll", function () {
  rect = $("#container")[0].getBoundingClientRect();
});


