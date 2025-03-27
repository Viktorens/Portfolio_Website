/**
 * Dark Mode
 */

function setColorScheme(scheme) {
    switch (scheme) {
        case 'dark':
            // Dark
            document.documentElement.style.setProperty('--background-primary-color', '#151515');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(0, 0, 0, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', 'black');
            document.documentElement.style.setProperty('--text-primary-color', 'whitesmoke');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', '#161616');
            document.documentElement.style.setProperty('--background-image', 'url(../assets/img/backgroundImage-dark.webp)');
            
            setColorsFromFile("../js/colors-dark.json");
            break;

        case 'light':
            // Light
            document.documentElement.style.setProperty('--background-primary-color', 'white');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(255, 255, 255, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', '#f0f0f0');
            document.documentElement.style.setProperty('--text-primary-color', '#252525');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', 'white');
            document.documentElement.style.setProperty('--background-image', 'url(../assets/img/backgroundImage-light.webp)');
            
            setColorsFromFile("../js/colors-light.json");
            break;

        default:
            // Default
            console.log('default');
            break;
    }
}

function readTextFileDark(file, callback) {
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

function setColorsFromFile(filePath) {
    readTextFileDark(filePath, function (text) {
        var colors = JSON.parse(text); // Parse JSON
        for (let i = 0; i < colors.length; i++) {
            let colorVariable = `--${i + 1}-color`;
            let r = parseInt(colors[i][0], 10);
            let g = parseInt(colors[i][1], 10);
            let b = parseInt(colors[i][2], 10);

            let colorValue = `rgb(${r}, ${g}, ${b})`;

            // Calculate luminance (relative brightness)
            let luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);

            // Determine text color based on luminance (contrast)
            let textColor = luminance < 0.5 ? 'white' : 'black';
            let textColorVariable = `--${i + 1}-color-text`;

            // Set the color and the text color
            document.documentElement.style.setProperty(colorVariable, colorValue);
            document.documentElement.style.setProperty(textColorVariable, textColor);
        }
    });
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
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()))
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    setColorScheme(newColorScheme)
});
