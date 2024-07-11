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
            document.documentElement.style.setProperty('--background-image', 'url(../assets/img/backgroundImage-dark.png)');
            
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
            
            readTextFileDark("../js/colors-dark.json", function (text) {
                var colors = JSON.parse(text); //parse JSON
                document.documentElement.style.setProperty('--dark-color', 'rgb(' + parseInt(colors[7][0], 10) + ', ' + parseInt(colors[7][1], 10) + ', ' + parseInt(colors[7][2], 10) + ')');
                document.documentElement.style.setProperty('--light-color', 'rgb(' + parseInt(colors[8][0], 10) + ', ' + parseInt(colors[8][1], 10) + ', ' + parseInt(colors[8][2], 10) + ')');
                document.documentElement.style.setProperty('--1-color', 'rgb(' + parseInt(colors[0][0], 10) + ', ' + parseInt(colors[0][1], 10) + ', ' + parseInt(colors[0][2], 10) + ')');
                document.documentElement.style.setProperty('--2-color', 'rgb(' + parseInt(colors[1][0], 10) + ', ' + parseInt(colors[1][1], 10) + ', ' + parseInt(colors[1][2], 10) + ')');
                document.documentElement.style.setProperty('--3-color', 'rgb(' + parseInt(colors[2][0], 10) + ', ' + parseInt(colors[2][1], 10) + ', ' + parseInt(colors[2][2], 10) + ')');
                document.documentElement.style.setProperty('--4-color', 'rgb(' + parseInt(colors[3][0], 10) + ', ' + parseInt(colors[3][1], 10) + ', ' + parseInt(colors[3][2], 10) + ')');
                document.documentElement.style.setProperty('--5-color', 'rgb(' + parseInt(colors[4][0], 10) + ', ' + parseInt(colors[4][1], 10) + ', ' + parseInt(colors[4][2], 10) + ')');
                document.documentElement.style.setProperty('--6-color', 'rgb(' + parseInt(colors[5][0], 10) + ', ' + parseInt(colors[5][1], 10) + ', ' + parseInt(colors[5][2], 10) + ')');
                document.documentElement.style.setProperty('--7-color', 'rgb(' + parseInt(colors[6][0], 10) + ', ' + parseInt(colors[6][1], 10) + ', ' + parseInt(colors[6][2], 10) + ')');

            });
            break;
        case 'light':
            // Light
            document.documentElement.style.setProperty('--background-primary-color', 'white');
            document.documentElement.style.setProperty('--background-primary-color-RGBA', 'rgba(255, 255, 255, 0.5)');
            document.documentElement.style.setProperty('--background-secondary-color', '#f0f0f0');
            document.documentElement.style.setProperty('--text-primary-color', '#252525');
            document.documentElement.style.setProperty('--text-secondary-color', '#252525'); // Sections Title Color
            document.documentElement.style.setProperty('--panel-primary-color', 'white');
            document.documentElement.style.setProperty('--background-image', 'url(../assets/img/backgroundImage-light.jpg)');
            
            function readTextFileLight(file, callback) {
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
            
            readTextFileLight("../js/colors-light.json", function (text) {
                var colors = JSON.parse(text); //parse JSON
                document.documentElement.style.setProperty('--dark-color', 'rgb(' + parseInt(colors[7][0], 10) + ', ' + parseInt(colors[7][1], 10) + ', ' + parseInt(colors[7][2], 10) + ')');
                document.documentElement.style.setProperty('--light-color', 'rgb(' + parseInt(colors[8][0], 10) + ', ' + parseInt(colors[8][1], 10) + ', ' + parseInt(colors[8][2], 10) + ')');
                document.documentElement.style.setProperty('--1-color', 'rgb(' + parseInt(colors[0][0], 10) + ', ' + parseInt(colors[0][1], 10) + ', ' + parseInt(colors[0][2], 10) + ')');
                document.documentElement.style.setProperty('--2-color', 'rgb(' + parseInt(colors[1][0], 10) + ', ' + parseInt(colors[1][1], 10) + ', ' + parseInt(colors[1][2], 10) + ')');
                document.documentElement.style.setProperty('--3-color', 'rgb(' + parseInt(colors[2][0], 10) + ', ' + parseInt(colors[2][1], 10) + ', ' + parseInt(colors[2][2], 10) + ')');
                document.documentElement.style.setProperty('--4-color', 'rgb(' + parseInt(colors[3][0], 10) + ', ' + parseInt(colors[3][1], 10) + ', ' + parseInt(colors[3][2], 10) + ')');
                document.documentElement.style.setProperty('--5-color', 'rgb(' + parseInt(colors[4][0], 10) + ', ' + parseInt(colors[4][1], 10) + ', ' + parseInt(colors[4][2], 10) + ')');
                document.documentElement.style.setProperty('--6-color', 'rgb(' + parseInt(colors[5][0], 10) + ', ' + parseInt(colors[5][1], 10) + ', ' + parseInt(colors[5][2], 10) + ')');
                document.documentElement.style.setProperty('--7-color', 'rgb(' + parseInt(colors[6][0], 10) + ', ' + parseInt(colors[6][1], 10) + ', ' + parseInt(colors[6][2], 10) + ')');

            });
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
