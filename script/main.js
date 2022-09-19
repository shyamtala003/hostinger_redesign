// code for login modal
let loginBtn = document.getElementById('btn__login');
let ModalClose = document.getElementById('modal__close');
let Modal = document.getElementById('modal-login');
let CTA = document.querySelector(".cta__btn");

ModalClose.addEventListener("click", () => {
  Modal.classList.remove("modal-active")
})

loginBtn.onclick = () => {
  Modal.classList.toggle("modal-active")
}

CTA.onclick = () => {
  Modal.classList.toggle("modal-active")
}


let modalTitle = document.getElementById('modal-title');
let modalBtn = document.getElementById('text-toggle');
let modalBtn2 = document.getElementById('modal-btn-text');

modalBtn.addEventListener("click", () => {

  if (modalBtn.innerHTML == "Login") {
    modalBtn2.innerText = "Don't have an account?";
    modalBtn.innerText = "Register";
    modalTitle.innerText = "Register";
  } else {
    modalBtn2.innerText = "Already have an account?";
    modalBtn.innerText = "Login";
    modalTitle.innerText = "Login";
  }
})


// code for menubar
let MenuBtn = document.getElementById('menu__icon');
let NavBar = document.querySelector(".navbar__nav");

MenuBtn.onclick = () => {
  if (MenuBtn.getAttribute("src") == "./images/nav-icon.png") {
    NavBar.classList.add("navbar__show");
    MenuBtn.setAttribute("src", "./images/close.png")
  } else {
    NavBar.classList.remove("navbar__show");
    MenuBtn.setAttribute("src", "./images/nav-icon.png")
  }

}


// code for timer

var countDownDate = new Date("Sep 26, 2022 15:37:25").getTime();

var x = setInterval(() => {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = ((days.toString()).length == 1) ? `0${days}` : `${days}`;
  document.getElementById("hours").innerHTML = ((hours.toString()).length == 1) ? `0${hours}` : `${hours}`;
  document.getElementById("minutes").innerHTML = ((minutes.toString()).length == 1) ? `0${minutes}` : `${minutes}`;
  document.getElementById("seconds").innerHTML = ((seconds.toString()).length <= 1) ? `0${seconds}` : `${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// swiper init code for testimonials section

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
  loop: true,
  allowTouchMove: true,

  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },

  }
});

// code for footer copyright text
let copyright = document.getElementsByClassName("copyright");
let year = new Date().getFullYear();

copyright[0].innerHTML=`© 2004-${year} hostinger.in - India’s #1 Web Hosting & Domains provider.`;