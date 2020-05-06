var player1name = prompt("Player 1 name");

var player2name = prompt("Player 2 name");


document.querySelectorAll("p")[0].innerHTML = player1name;

document.querySelectorAll("p")[1].innerHTML = player2name;



function theGame() {
    var randomnumberofplayer1 = Math.floor(Math.random() * 6) + 1;

    var imges = "images/dice" + randomnumberofplayer1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", imges);



    var randomnumberofplayer2 = Math.floor(Math.random() * 6) + 1;

    var imges = "images/dice" + randomnumberofplayer2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", imges);




    if (randomnumberofplayer1 > randomnumberofplayer2) {

        document.querySelector("h1").innerHTML = player1name + " win ! " + randomnumberofplayer1;

    } else if (randomnumberofplayer1 < randomnumberofplayer2) {

        document.querySelector("h1").innerHTML = player2name + " win ! " + randomnumberofplayer2;

    } else {

        document.querySelector("h1").innerHTML = "Drow!";

    }


}
