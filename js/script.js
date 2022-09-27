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

function inVisible(element) {
  //Checking if the element is
  //visible in the viewport
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  //animating the element if it is
  //visible in the viewport
  if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
    animate(element);
}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function () {
      inVisible($(this));
    });
  });
});

function animate(element) {
  //Animating the element if not animated before
  if (!element.hasClass("ms-animated")) {
    var maxval = element.data("max");
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html(),
    }).animate(
      {
        countNum: maxval,
      },
      {
        //duration 5 seconds
        duration: 1000,
        easing: "linear",
        step: function () {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function () {
          element.html(this.countNum + html);
        },
      }
    );
  }
}

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".slide-item");
const slideCount = slides.length;
console.log("iki", slideCount);
fraction.innerHTML = `<span class="start-count"> 1 /</span> <span class="counter-length">${slideCount}</span>`;
var swiperBanner = new Swiper(".mySwiperBanner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: () => {
      fraction.innerHTML = `<span class="start-count">${
        swiperBanner.realIndex + 1
      }</span> <span class="counter-length">${slideCount}</span>`;
    },
  },
});

var mySwiperCurrent = new Swiper(".mySwiperCurrent", {
  navigation: {
    nextEl: "#swiper-button-next",
    prevEl: "#swiper-button-prev",
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

var swiper = new Swiper(".mySwiperNews", {
    navigation: {
        nextEl: "#next2",
        prevEl: "#prev2",
      },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      
    },
    768: {
      slidesPerView: 2,
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
