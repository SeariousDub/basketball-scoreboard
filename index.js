// HOME VARIABLES
const homeScoreEl = document.getElementById("home-scr-el")
const incOneHomeBtn = document.getElementById("add-one-home")
const incTwoHomeBtn = document.getElementById("add-two-home")
const incThreeHomeBtn = document.getElementById("add-three-home")
const decHomeBtn = document.getElementById("dec-home")

let homeScore = 0
homeScoreEl.textContent = String(homeScore).padStart(2, "0") //Initial display
// HOME VARIABLES


// GAME TIMER VARIABLES
const timerEl = document.getElementById("timer-el")
const start = document.getElementById("start-btn")
const stop = document.getElementById("stop-btn")

timerEl.innerHTML = "00:00:00"
let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false
// GAME TIMER VARIABLES

// RESET VARIABLES
const resetBtn = document.getElementById("reset")
// RESET VARIABLES


// GUEST VARIABLES
const guestScoreEl = document.getElementById("guest-scr-el")
const incOneGuestBtn = document.getElementById("add-one-guest")
const incTwoGuestBtn = document.getElementById("add-two-guest")
const incThreeGuestBtn = document.getElementById("add-three-guest")
const decGuestBtn = document.getElementById("dec-guest")

let guestScore = 0
guestScoreEl.textContent = String(guestScore).padStart(2, "0")
// GUEST VARIABLES


//SCORE BOXES
const homeScoreBox = document.getElementById("home-score-box")
const guestScoreBox = document.getElementById("guest-score-box")

function updateWinningStyles() {
    if (homeScore > guestScore) {
        homeScoreBox.classList.add("winning")
        guestScoreBox.classList.remove("winning")
    } else if (guestScore > homeScore) {
        guestScoreBox.classList.add("winning")
        homeScoreBox.classList.remove("winning")
    } else {
        homeScoreBox.classList.remove("winning")
        guestScoreBox.classList.remove("winning")
    }
}
//SCORE BOXES


// HOME SCORE
incOneHomeBtn.addEventListener("click", function() {
    homeScore += 1
    homeScoreEl.textContent = String(homeScore).padStart(2, "0")
    updateWinningStyles()
})

incTwoHomeBtn.addEventListener("click", function() {
homeScore += 2
homeScoreEl.textContent = String(homeScore).padStart(2, "0")
updateWinningStyles()
})

incThreeHomeBtn.addEventListener("click", function() {
    homeScore += 3
    homeScoreEl.textContent = String(homeScore).padStart(2, "0")
    updateWinningStyles()
})

decHomeBtn.addEventListener("click", function() {
    homeScore = Math.max(0, homeScore - 1)
    homeScoreEl.textContent = String(homeScore).padStart(2, "0")
    updateWinningStyles()
})
// HOME SCORE


// GUEST SCORE
incOneGuestBtn.addEventListener("click", function() {
    guestScore += 1
    guestScoreEl.textContent = String(guestScore).padStart(2, "0")
    updateWinningStyles()
})

incTwoGuestBtn.addEventListener("click", function() {
    guestScore += 2
    guestScoreEl.textContent = String(guestScore).padStart(2, "0")
    updateWinningStyles()
})

incThreeGuestBtn.addEventListener("click", function() {
    guestScore += 3
    guestScoreEl.textContent = String(guestScore).padStart(2, "0")
    updateWinningStyles()
})

decGuestBtn.addEventListener("click", function () {
    guestScore = Math.max(0, guestScore - 1)
    guestScoreEl.textContent = String(guestScore).padStart(2, "0")
    updateWinningStyles()
})
// GUEST SCORE


// TIMER FUNCTIONS
start.addEventListener ("click", function() {
    if (!isRunning){
            startTime = Date.now() - elapsedTime
            timer = setInterval(update, 1)
            isRunning = true
        }
})

stop.addEventListener ("click", function() {
    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime
        isRunning = false
    }
})

function update() {
    const currentTime = Date.now()
    elapsedTime = currentTime - startTime

    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60)
    let seconds = Math.floor((elapsedTime / 1000) % 60)
    let milliseconds = Math.floor((elapsedTime % 1000)  / 10)

    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0")

    timerEl.textContent = `${minutes}:${seconds}:${milliseconds}`
}
// TIMER FUNCTIONS


// RESET FUNCTIONS
resetBtn.addEventListener("dblclick", function (){
    //timer
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRunning = false
    timerEl.textContent = "00:00:00"
    //timer
    
    //home score
    homeScore = 0
    homeScoreEl.textContent = String(homeScore).padStart(2, "0") //Initial display
    updateWinningStyles()
    //home score

    //guest score
    guestScore = 0
    guestScoreEl.textContent = String(guestScore).padStart(2, "0")
    updateWinningStyles()
    //guest score
})
// RESET FUNCTIONS

//updateWinningStyles() //updates scores on refresh