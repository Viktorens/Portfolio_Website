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