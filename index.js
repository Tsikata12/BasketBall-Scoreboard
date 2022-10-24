let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")
let winner = document.getElementById("p")



let homeScore = 0
let guestScore = 0

home.textContent = 0
guest.textContent = 0
winner.textContent = "Draw"


//  function to declare winner

function checkScores() {
    if (homeScore > guestScore) {
    winner.textContent = "Home Wins!!!"
} else if (guestScore > homeScore) {
     winner.textContent = "Guest Wins!!!"
} else {
    winner.textContent = "Draw!!!"
}
}
//  function to declare winner


// function to reset scores

function reset() {
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
    winner.textContent = "Draw!!!"
}

// function to reset scores


// functions to add to scores for the homescores

function addOneH() {
    homeScore += 1
    home.textContent = homeScore
}

function addTwoH() {
    homeScore += 2
    home.textContent = homeScore
}

function addThreeH() {
    homeScore += 3
    home.textContent = homeScore
}

// functions to add to scores for the homescores


// functions to add to scores for the guestscores

function addOneG() {
    guestScore += 1
    guest.textContent = guestScore
}

function addTwoG() {
    guestScore += 2
    guest.textContent = guestScore
}

function addThreeG() {
    guestScore += 3
    guest.textContent = guestScore
}

// functions to add to scores for the guestscores

