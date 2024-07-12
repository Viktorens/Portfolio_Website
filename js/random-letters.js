/**
 * Title Letters
 */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const titleNameLetters = document.getElementById("title-name")

function randomizeNameLetters(titleNameLetters) {
    let iterations = 0
    
    const interval = setInterval(() => {
        titleNameLetters.target.innerText = titleNameLetters.target.innerText.split("")
        .map((letter,index) => {
            if(index < iterations) {
                return titleNameLetters.target.dataset.value[index]
            }
            return letters[Math.floor(Math.random()*26)]
        })
        .join("")
    
    if (iterations >= titleNameLetters.target.dataset.value.length) clearInterval(interval)
    
    iterations += 1 / 3
    }, 30)
}

titleNameLetters.addEventListener("click", randomizeNameLetters)
titleNameLetters.addEventListener("mouseover", randomizeNameLetters)