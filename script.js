
window.addEventListener("load", function () {
  const preload = document.querySelector(".preload");
  preload.style.opacity = "0";
  preload.style.zIndex = "0";
});


// gsap
gsap.from('.logo', {duration: 0.5,y:-100,delay: 0.5});


// gsap

const menuBtn = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.style.transform = 'translateY(0%)';
});
let sidebarOpen = false;

menuBtn.addEventListener('click', () => {
  sidebarOpen = !sidebarOpen;
  sidebar.style.transform = sidebarOpen ? 'translateY(0%)' : 'translateY(-100%)';
});

document.addEventListener("DOMContentLoaded", function () {
  renderSlider(".slider");
});

const nextSlide = () => {
  let activeSlide = document.querySelector(".slide--active");
  let nextSlide = activeSlide.nextElementSibling;
  if (nextSlide) {
    activeSlide.classList.remove("slide--active");
    nextSlide.classList.remove("next");
    nextSlide.classList.add("slide--active");
    renderSlides();
    renderBtns();
  }
};

const renderBtns = () => {
  let nextBtn = document.querySelector("#forvard");
  let prevBtn = document.querySelector("#back");

  let activeSlide = document.querySelector(".slide--active");
  let prevSlide = activeSlide.previousElementSibling;
  !prevSlide
    ? prevBtn.classList.add("disabled")
    : prevBtn.classList.remove("disabled");

  let nextSlide = activeSlide.nextElementSibling;
  !nextSlide
    ? nextBtn.classList.add("disabled")
    : nextBtn.classList.remove("disabled");
};

const prevSlide = () => {
  let activeSlide = document.querySelector(".slide--active");
  let prevSlide = activeSlide.previousElementSibling;
  if (prevSlide) {
    activeSlide.classList.remove("slide--active");
    prevSlide.classList.remove("prev");
    prevSlide.classList.add("slide--active");
    renderSlides();
    renderBtns();
  }
};

const renderSlides = () => {
  let slides = document.querySelectorAll(".slide");
  if (!slides) {
    return;
  }
  let activeSlide = document.querySelector(".slide--active");
  if (!activeSlide) {
    activeSlide = slides.item(0);
    activeSlide.classList.add("slide--active");
  }
  [].forEach.call(slides, function (slide) {
    slide.classList.remove("prev", "next");
  });

  let prevSlide = activeSlide.previousElementSibling;
  prevSlide && prevSlide.classList.add("prev");

  let nextSlide = activeSlide.nextElementSibling;
  nextSlide && nextSlide.classList.add("next");
};

const renderSlider = (element) => {
  const slider = document.querySelector(element);
  if (slider) {
    let nextButton = document.querySelector("#forvard");
    nextButton.addEventListener("click", function () {
      nextSlide();
    });

    let prevButton = document.querySelector("#back");
    prevButton.addEventListener("click", function () {
      prevSlide();
    });
    renderSlides();
  }
};

const chooseSongButton = document.getElementById("chooseSong");
const stopSongButton = document.getElementById("stopSong");
const header = document.querySelector("header");
const containerSong = document.querySelector(".container_song");
const radioVid = document.querySelector(".radioVid");
const closeButton = document.querySelector(".close");
const parallax = document.querySelector(".parallax");
const headerH1 = document.querySelector("header h1");
const profile = document.querySelector(".profile");
const anime = document.querySelector(".anime");
const eventList = document.querySelector(".event");
const listDiscography = document.querySelector(".list-discography");


chooseSongButton.addEventListener("click", () => {
  containerSong.style.display = "block";
  radioVid.style.display = "block";
  closeButton.style.display = "block";
  parallax.style.display = "none";
  headerH1.style.display = "none";
  header.style.backgroundImage = "url('')";
  header.style.backgroundColor = "black";
  profile.style.display = "none";
  anime.style.display = "none";
  eventList.style.display = "none";
  radioVid.currentTime = 0;
  listDiscography.style.display = "none";
});

closeButton.addEventListener("click", () => {
  containerSong.style.display = "none";
  radioVid.style.display = "none";
  closeButton.style.display = "none";
  parallax.style.display = "";
  headerH1.style.display = "";
  profile.style.display = "";
  anime.style.display = ""
  eventList.style.display = "";
  listDiscography.style.display = "";
  document.body.style.background = ""; // reset background color
  document.querySelector("header").style.backgroundImage = ""; // reset background image
});

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    radioVid.play();
    containerSong.style.transform = "translate(20rem,-18rem)";
    radioVid.style.width = "100%";
    radioVid.style.height = "100%";
    radioVid.style.left = "50%";
    radioVid.style.top = "50%";
    radioVid.style.transform = "translate(-50%, -50%)";
    playButton.style.display = "none";
    closeButton.style.display = "none";
    const slide = playButton.closest(".slide");
    const audioSrc = slide.dataset.slide;
    const audio = document.getElementById(`background-music-${audioSrc}`);

    setTimeout(() => {
      if (audio.canPlayType("audio/mpeg")) {
        audio.load();
        audio.play();
      }
    }, 8000);
  });
});

radioVid.onended = () => {
  containerSong.style.display = "none";
  radioVid.style.display = "none";
  closeButton.style.display = "none";
  parallax.style.display = "";
  chooseSongButton.style.display = "none";
  stopSongButton.style.display = "block";
  headerH1.style.display = "";
  profile.style.display = "";
  anime.style.display = ""
  eventList.style.display = "";
  listDiscography.style.display = "";
  document.body.style.background = ""; // reset background color
  document.querySelector("header").style.backgroundImage = ""; // reset background image
  containerSong.style.transform = "translate(-50%, -50%)";
  radioVid.style.width = "70%";
  radioVid.style.height = "70%";
  radioVid.style.left = "32%";
  radioVid.style.top = "50%";
  radioVid.style.transform = "translate(-50%, -50%)";
};

stopSongButton.addEventListener("click", () => {
  chooseSongButton.style.display = "block";
  stopSongButton.style.display = "none";

  const activeSlide = document.querySelector(".slide--active");
  if (activeSlide) {
    const playButton = activeSlide.querySelector(".play-button");
    playButton.style.display = "block";
    const audioSrc = activeSlide.dataset.slide;
    const audio = document.getElementById(`background-music-${audioSrc}`);
    if (audio && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
   breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 3)+"px; left: "+(e.pageX - 3)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})



