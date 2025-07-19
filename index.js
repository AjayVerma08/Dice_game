document.querySelector("img.img1").setAttribute("src", "./images/dice6.png");
document.querySelector("img.img2").setAttribute("src", "./images/dice6.png");

var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomnumber1 + ".png");
document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomnumber2 + ".png");

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "!!! Player1 wins";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player2 wins !!!";
}else {
    document.querySelector("h1").innerHTML = "!!! Draw !!!";
}