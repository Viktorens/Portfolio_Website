/**
 * Background Image Blur on scroll
 * Banner Title Opacity on scroll
 */

function handleImageBlur() {
    var windowScroll = window.pageYOffset;
    var blurAmount = (windowScroll / 300.0) * 10;
    var scaleAmount = ((windowScroll * 1.5 / 50.0) / 100 + 1);
    var opacityAmount = ((windowScroll * -1.5 / 5.0) / 100 + 1);
    var scaleAmountTitle = ((windowScroll * 1.5) / 100 + 1);
    document.getElementById("blurred-img").style.filter = `blur(${ blurAmount }px)`;
    document.getElementById("blurred-img").style.transform = `scale(${ scaleAmount })`;
    document.getElementById("title-name").style.filter = `blur(${ blurAmount }px)`;
    document.getElementById("title-name").style.transform = `scale(${ scaleAmountTitle })`;
    document.getElementById("title-name").style.opacity = `${ opacityAmount }`;

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