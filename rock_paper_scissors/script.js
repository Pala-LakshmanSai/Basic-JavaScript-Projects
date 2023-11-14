let arr = ['rock', 'paper', 'scissors']
const getComputerResult = () => {
    let random = Math.floor(Math.random()*arr.length)
    return arr[random]
}
let button = document.querySelectorAll('.rpsButton')
let playerResult
for (let i = 0; i < 3; i++) {
    button[i].onclick = () => {
        playerResult = button[i].value
        result(playerResult, getComputerResult())
    }
}
let score = document.getElementById("player-score")
let result = (player, computer) => {
    if (player === computer){
        score.innerText = 0
    }
    else if (player === 'rock' && computer === 'scissors') {
        score.innerText = 1
    }
    else if (player === 'rock' && computer === 'paper') {
        score.innerText = -1
    }
    else if (player === 'paper' && computer === 'rock') {
        score.innerText = 1
    }
    else if (player === 'paper' && computer === 'scissors') {
        score.innerText = -1
    }
    else if (player === 'scissors' && computer === 'rock') {
        score.innerText = -1
    }
    else {
        score.innerText = 1
    }
    document.getElementById("hands").innerText = `👨${player} vs 🤖${computer}`
    if (score.innerText == 0) {
        document.getElementById("result").innerText = "Draw"
    }
    else if (score.innerText == 1) {
        document.getElementById("result").innerText = "You won"
    }
    else {
        document.getElementById("result").innerText = "You Lose"
    }
}
document.getElementById("endGameButton").onclick = () => {
    document.getElementById("result").innerText = ""
    score.innerText = ""
    document.getElementById("hands").innerText = ""
}

