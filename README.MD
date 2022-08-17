# My own portfolio website

### Short description

This is one of my personal project that I started in the summer of 2021. It's constantly updated to keep up with the following:

- Must have a modern but still minimalistic look

- Visual bugs must be fixed

- Everyone should be able to see my latest work here

### Technologies used and features

- This webpage uses native HTML, CSS and JavaScript.

- The accent colors are picked from the background image by using a K-Mean algorithm. It's based on [this Github project](https://github.com/kb22/Color-Identification-using-Machine-Learning) and the algorithm it's configured to the webpage needs.

- It features light and dark mode support. It changes without refreshing the page by using event listeneres.

- Each photo gallery (photography categories and desings) is a gallery on the [Pixieset](https://pixieset.com/) website.

### Supported browsers

I try to keep all it's features available for all browsers but unfortunately it's not still possible

###### Chromium Engine

Everything runs smoothly on the desktop. If using the mobile version, some icons may be off centered.

###### Firefox

The ```backdrop-filter``` CSS property is not yet supported in Firefox. This means that some elements will have a transparent background instead of a blured one. But you can enable it in Firefox version 70 and above following this steps:

- Open a new Firefox tab and type ```about:config``` in the address bar

- Type ```layout.css.backdrop-filter.enabled``` in the search bar and set it to ```true```

- Type ```gfx.webrender.all``` in the search bar and set it to ```true``` as well

On Firefox mobile you can access the configuration tab only if using the beta version of the app. And like the Chromium version, some icons will be off centered on the mobile version of the browser.

###### Safari

There shouldn't be any problems when accessing this webpage from any IOS or macOS device