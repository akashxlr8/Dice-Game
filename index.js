// Random number generation
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6)+1;
// console.log(randomNumber1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6)+1;

/* Method 1 using array
const imgsrcs = ["","images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

const rndimg=imgsrcs[randomNumber1];
const rndimg2=imgsrcs[randomNumber2];

const img1 = document.querySelector(".img1");
img1.setAttribute("src", rndimg);

const img2 = document.querySelector(".img2");
img2.setAttribute("src", rndimg2);

if (rndimg < rndimg2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 👉🏼";
} else if (rndimg > rndimg2) {
  document.querySelector("h1").innerHTML = "👈🏼 Player 1 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw ✌🏼";
}


*/
// Method 2 using string

// for pic 1
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageSrc = "images/" + randomDiceImage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSrc);

// for pic 2
var randomDiceImage2="dice"+ randomNumber2+".png";
var randomDiceImageSrc2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSrc2);
