
const newGame = _ => {
    let randomNumber = _ => Math.floor(Math.random() * 256)
    let randomColor = _ => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

    let guess = randomColor()
    document.querySelector(".guess").textContent = guess.toUpperCase()

    let infoBar = document.querySelector(".infoBar")
        document.querySelectorAll(".square").forEach(e => {
            e.style.background = randomColor()
            e.addEventListener("click", _ => {
                e.style.background = "#232323"
                infoBar.textContent = "Try again!"
            })
        })

    let selectedSquare = document.querySelector(`.square${(Math.floor(Math.random() * 6 + 1))}`)
    selectedSquare.style.background = guess

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

    infoBar.textContent = ""
}

newGame()

document.querySelector(".newGame").addEventListener("click", newGame)