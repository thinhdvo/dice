var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// change images base on random number
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

// Output
if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").innerHTML = "Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".result").innerHTML = "Player 2 Win!";
} else {
    document.querySelector(".result").innerHTML = "Draw!";
}





// Refresh page
function refreshBtn() {
    location.reload();
}