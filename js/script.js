/**
 * Copyright Footer
 */
document.getElementById("copyright").innerHTML = "&copy " + new Date().getFullYear() + " Victor Greavu | Cluj Napoca, România";

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

/**
 * Title Letters
 */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
document.querySelector("h1").onmouseover = event => {
    let iterations = 0

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
            if(index < iterations) {
                return event.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random()*26)]
        })
        .join("")

    if (iterations >= event.target.dataset.value.length) clearInterval(interval)

    iterations += 1 / 3
    }, 30)
}

/**
 * Design Pattern Animation
 */
const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
}

const designWrapper = document.getElementById("design-wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
    const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];

    designWrapper.dataset.configuration = combination.configuration;
    designWrapper.dataset.roundness = combination.roundness;

    prev = index;
}, 3000);

/**
 * Menu Overlay - Animations
 */

// Opens the overlay
function openNav() {
    var menuButton = document.getElementById("navbar");
    var scrollToTopButton = document.getElementById("scroll-to-top-container");

    document.getElementById("my-nav").style.left = "0%";
    menuButton.style.top = "-100px";
    scrollToTopButton.style.bottom = "-100px";
}

// Closes the overlay
function closeNav() {
    var menuButton = document.getElementById("navbar");
    var scrollToTopButton = document.getElementById("scroll-to-top-container");

    document.getElementById("my-nav").style.left = "-100%";
    menuButton.style.top = "0";
    scrollToTopButton.style.bottom = "50px";
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
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

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

var scrollToTopBtn = document.querySelector(".scroll-to-top-container");
var rootElement = document.documentElement;

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if ((rootElement.scrollTop / scrollTotal) > 0.33) {
        scrollToTopBtn.classList.add("show-btn")
    } else {
        scrollToTopBtn.classList.remove("show-btn")
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
    var windowScroll = window.pageYOffset;
    var blurAmount = (windowScroll / 300.0) * 10;
    var scaleAmount = ((windowScroll * 1.5 / 300.0) / 100 + 1);
    document.getElementById("blurred-img").style.filter = `blur(${ blurAmount }px)`;
    document.getElementById("blurred-img").style.transform = `scale(${ scaleAmount })`;

    if (blurAmount >= 10)
        document.getElementById("blurred-img").style.filter = `blur(${ 10 }px)`;
}
document.addEventListener("scroll", handleImageBlur);


/**
 * Elements fade in/out on scroll
 */

function revealElements() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 25;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealElements);

// animation for revealing the menu buttons
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-elements-fade');
        } else {
            entry.target.classList.remove('show-elements-fade');
        }
    });
});
const hiddenMenuElementsFade = document.querySelectorAll('.hide-menu-elements-fade');
hiddenMenuElementsFade.forEach((element) => observer.observe(element));


/**
 * Dark Mode
 */

function setColorScheme(scheme) {
    switch (scheme) {
        case 'dark':
            // Dark
            document.documentElement.style.setProperty('--background-primary-color', '#252525');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', 'black');
            document.documentElement.style.setProperty('--text-primary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', '#161616');
            break;
        case 'light':
            // Light
            document.documentElement.style.setProperty('--background-primary-color', 'white');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(255, 255, 255, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', '#f0f0f0');
            document.documentElement.style.setProperty('--text-primary-color', '#252525');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
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


/**
 * Loading and reading json file
 */

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../js/colors.json", function (text) {
    var colors = JSON.parse(text); //parse JSON
    document.documentElement.style.setProperty('--dark-color', 'rgb(' + parseInt(colors[0][0], 10) + ', ' + parseInt(colors[0][1], 10) + ', ' + parseInt(colors[0][2], 10) + ')');
    document.documentElement.style.setProperty('--light-color', 'rgb(' + parseInt(colors[6][0], 10) + ', ' + parseInt(colors[6][1], 10) + ', ' + parseInt(colors[6][2], 10) + ')');
    document.documentElement.style.setProperty('--1-color', 'rgb(' + parseInt(colors[0][0], 10) + ', ' + parseInt(colors[0][1], 10) + ', ' + parseInt(colors[0][2], 10) + ')');
    document.documentElement.style.setProperty('--2-color', 'rgb(' + parseInt(colors[1][0], 10) + ', ' + parseInt(colors[1][1], 10) + ', ' + parseInt(colors[1][2], 10) + ')');
    document.documentElement.style.setProperty('--3-color', 'rgb(' + parseInt(colors[2][0], 10) + ', ' + parseInt(colors[2][1], 10) + ', ' + parseInt(colors[2][2], 10) + ')');
    document.documentElement.style.setProperty('--4-color', 'rgb(' + parseInt(colors[3][0], 10) + ', ' + parseInt(colors[3][1], 10) + ', ' + parseInt(colors[3][2], 10) + ')');
    document.documentElement.style.setProperty('--5-color', 'rgb(' + parseInt(colors[4][0], 10) + ', ' + parseInt(colors[4][1], 10) + ', ' + parseInt(colors[4][2], 10) + ')');
    document.documentElement.style.setProperty('--6-color', 'rgb(' + parseInt(colors[5][0], 10) + ', ' + parseInt(colors[5][1], 10) + ', ' + parseInt(colors[5][2], 10) + ')');
    document.documentElement.style.setProperty('--7-color', 'rgb(' + parseInt(colors[6][0], 10) + ', ' + parseInt(colors[6][1], 10) + ', ' + parseInt(colors[6][2], 10) + ')');

});
