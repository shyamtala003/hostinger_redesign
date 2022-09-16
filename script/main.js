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



