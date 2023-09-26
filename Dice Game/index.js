var randomNumber1 = Math.floor(Math.random()*6)+1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 2 Wins!";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}