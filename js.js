var randomnumberofplayer1 = Math.floor(Math.random() * 6) + 1;

var imges = "images/dice" + randomnumberofplayer1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imges);



var randomnumberofplayer2 = Math.floor(Math.random() * 6) + 1;

var imges = "images/dice" + randomnumberofplayer2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imges);



if (randomnumberofplayer1 > randomnumberofplayer2) {

    document.querySelector("h1").innerHTML = "Player 1 win !";

} else if (randomnumberofplayer1 < randomnumberofplayer2) {

    document.querySelector("h1").innerHTML = "Player 2 win !";

} else {

    document.querySelector("h1").innerHTML = "Drow!";

}