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