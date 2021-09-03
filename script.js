// Opens the overlay
function openNav() {
    var blurElement = document.getElementById("main");
    var menuButton = document.getElementById("navbarButton");
    menuButton.classList.remove("no-transparent-menubutton");
    menuButton.classList.add("transparent-menubutton");
    blurElement.classList.remove("no-blur-filter");
    blurElement.classList.add("blur-filter");
    document.getElementById("myNav").style.width = "100%";
}


// Closes the overlay
function closeNav() {
    var blurElement = document.getElementById("main");
    var menuButton = document.getElementById("navbarButton");
    menuButton.classList.remove("transparent-menubutton");
    menuButton.classList.add("no-transparent-menubutton");
    blurElement.classList.remove("blur-filter");
    blurElement.classList.add("no-blur-filter");
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("navbar").style.top = "0px";
}


// Disable scrolling when menu is opened
function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function() { window.scrollTo(x, y); };
}


// Enable scrolling when menu is closed
function enableScrolling() {
    window.onscroll = null;
}


// Scroll Up Button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.33) {
        scrollToTopBtn.classList.add("showBtn")
    } else {
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


// Navbar background
var menuButton = document.querySelector(".menuButton");
var rootElement = document.documentElement;

function handleBackground() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.15) {
        menuButton.classList.remove("show-background");
        menuButton.classList.add("no-background");
    } else {
        menuButton.classList.remove("no-background");
        menuButton.classList.add("show-background");
    }
}

document.addEventListener("scroll", handleBackground);

// Scroll Up Navbar
var prevScrollpos = window.pageYOffset;

function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);