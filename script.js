/**
 * Copyright Foter
 */
document.getElementById("copyright").innerHTML = "&copy " + new Date().getFullYear() + " Victor Greavu | Cluj Napoca, România";

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

/**
 * Menu Overlay - Adding Blur
 */

// Opens the overlay
function openNav() {
    var blurElement = document.getElementById("main");
    var menuButton = document.getElementById("navbarButton");
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    scrollToTopButton.classList.remove("showBtn");
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


/**
 * Disable Scrolling
 */

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 32: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// Disable scrolling when menu is opened
function disableScrolling() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Enable scrolling when menu is closed
function enableScrolling() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


/**
 * Scroll Up Button
 */

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
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


/**
 * Scrolls up the navbar
 */

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
var prevScrollpos = window.pageYOffset;

async function handleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || window.pageYOffset <= 50) {
        document.getElementById("navbar").style.top = "0";
    } else {
        await delay(100);
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
document.addEventListener("scroll", handleNavbar);


/**
 * Background Image Blur on scroll
 * Banner Title Opacity on scroll
 */

function handleImageBlur() {
    var blur = window.pageYOffset;
    opacityVal = (blur / 300.0);
    document.getElementById("blurred-img").style.opacity = opacityVal;
    document.getElementById("bannerTitle").style.opacity = 1 - opacityVal;

}
document.addEventListener("scroll", handleImageBlur);


/**
 * Dark Mode
 */

function setColorScheme(scheme) {
    switch (scheme) {
        case 'dark':
            // Dark
            document.documentElement.style.setProperty('--background-primary-color', '#252525');
            document.documentElement.style.setProperty('--background-secondary-color', 'black');
            document.documentElement.style.setProperty('--text-primary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525');
            document.documentElement.style.setProperty('--panel-primary-color', '#161616');
            break;
        case 'light':
            // Light
            document.documentElement.style.setProperty('--background-primary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--background-secondary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--text-primary-color', '#252525');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525');
            document.documentElement.style.setProperty('--panel-primary-color', 'white');
            break;
        default:
            // Default
            console.log('default');
            break;
    }
}

function getPreferredColorScheme() {
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }
    return 'light';
}

// Listens for changes
if (window.matchMedia) {
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setColorScheme(newColorScheme);
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


readTextFile("data.json", function(text) {
    var data = JSON.parse(text); //parse JSON
    document.documentElement.style.setProperty('--dark-color', data[1]);
    document.documentElement.style.setProperty('--light-color', data[0]);

});