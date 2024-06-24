// create random number from 1 - 6
// Player 1
var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Player 2
var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;


// select dice img based on random numbers
// Player 1 
// case dice === 1
if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
// case dice === 2
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
// case dice === 3
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
// case dice === 4
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
// case dice === 5
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
// case dice === 6
else {
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

// Player 2
// case dice === 1
if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
// case dice === 2
else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
// case dice === 3
else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
// case dice === 4
else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
// case dice === 5
else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
// case dice === 6
else {
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

// Compare score between two players
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
    document.querySelector("h1").style.fontSize = "7rem";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    document.querySelector("h1").style.fontSize = "7rem";
} else {
    document.querySelector("h1").textContent = "Draws!";
}

// refresh page
function refreshBtn() {
    document.querySelector(".btn").onclick = location.reload();
}