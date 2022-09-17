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

var x = setInterval( () => {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = ((days.toString()).length==1)?`0${days}`:`${days}`;
  document.getElementById("hours").innerHTML = ((hours.toString()).length==1)?`0${hours}`:`${hours}`;
  document.getElementById("minutes").innerHTML = ((minutes.toString()).length==1)?`0${minutes}`:`${minutes}`;
  document.getElementById("seconds").innerHTML = ((seconds.toString()).length<=1)?`0${seconds}`:`${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
