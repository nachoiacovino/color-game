
const newGame = _ => {
    let randomNumber = _ => Math.floor(Math.random() * 256)
    let randomColor = _ => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
    let guess

    let newGuess = _ => {
        guess = randomColor()
        document.querySelector(".guess").textContent = guess.toUpperCase()
    }
    newGuess()

    let reset = _ => {
        infoBar.textContent = ""
        document.querySelector(".header").style.background = "rgb(5, 121, 216)"
    }

    let infoBar = document.querySelector(".infoBar")
    let selectedSquare

    let hardMode = _ => {
        document.querySelectorAll(".square").forEach(e => {
            e.style.background = randomColor()
            e.addEventListener("click", _ => {
                e.style.background = "#232323"
                infoBar.textContent = "Try again!"
            })
        })
        selectedSquare = document.querySelector(`.square${(Math.floor(Math.random() * 6 + 1))}`)
        selectedSquare.style.background = guess
    }

    hardMode()

    let easyMode = _ => {
        reset()
        newGuess()
        document.querySelectorAll(".squareEasy").forEach(e => {
            e.style.background = randomColor()
            e.addEventListener("click", _ => {
                e.style.background = "#232323"
                infoBar.textContent = "Try again!"
            })
        })

        document.querySelectorAll(".squareHard").forEach(e => {
            e.style.background = "#232323"
            e.addEventListener("click", _ => {
                e.style.background = "#232323"
            })
        })

        selectedSquare = document.querySelector(`.square${(Math.floor(Math.random() * 3 + 1))}`)
        selectedSquare.style.background = guess
    }

    document.querySelector(".easyMode").addEventListener("click", easyMode)
    document.querySelector(".hardMode").addEventListener("click", hardMode)

    

    selectedSquare.addEventListener("click", _ => {
        selectedSquare.style.background = guess
        document.querySelector(".header").style.background = guess
        infoBar.textContent = "You win!"

        document.querySelectorAll(".square").forEach(e => {
            e.addEventListener("click", _ => {
                infoBar.textContent = "You win!"
            })
        })
    })

    reset()
}

newGame()

document.querySelector(".newGame").addEventListener("click", newGame)
document.querySelector(".hardMode").addEventListener("click", newGame)