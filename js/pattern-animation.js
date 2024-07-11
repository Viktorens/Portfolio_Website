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