var output = document.getElementById("output")
var virtual_player = "";
var real_counter = 0;
var virtual_counter = 0;
alert('in this game, we ask you: "rock-paper-scissors" three times and you should answer')
list = [1, 2, 3];
for (var x of list) {
    var rand = Math.random() * 3;
    rand = Math.floor(rand);
    if (rand == 0) {
        virtual_player = "rock";
    } else if (rand == 1) {
        virtual_player = "paper";
    } else {
        virtual_player = "scissors";
    }
    if (x == 1) {
        var real_player = prompt("rock -paper-scissors:");
    } else {
        var real_player = prompt("competitor " + virtual_counter + "-" + real_counter + " you." + "    rock -paper-scissors:");
    }


    console.log("you:" + real_player);
    if (real_player == virtual_player) {

    } else if (real_player == "rock" && virtual_player == "scissors") {
        real_counter++;
    } else if (real_player == "scissors" && virtual_player == "rock") {
        virtual_counter++;

    } else if (real_player == "rock" && virtual_player == "paper") {
        virtual_counter++;
    } else if (real_player == "paper" && virtual_player == "rock") {
        real_counter++;
    } else if (real_player == "paper" && virtual_player == "scissors") {
        virtual_counter++;
    } else {
        real_counter++;
    }
    console.log("competitor:" + virtual_player);

}
output.innerHTML = "competitor " + virtual_counter + "-" + real_counter + " you" + "<br>";
if (virtual_counter > real_counter) {
    output.innerHTML += "you loooooose sorry<span>&#128551;&#128551;</span>";
} else if (virtual_counter < real_counter) {
    output.innerHTML += "you win<span> &#128525;&#128525;</span>";
} else {
    output.innerHTML += "try again<span>&#128521;&#128521;</span>";
}