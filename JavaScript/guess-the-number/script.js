const my_html_content = document // I use document to access the html file
const guess_button = document.querySelector("button");
guess_button.addEventListener("click", GuessIfNumberCorrect);

function GetRandomNumberInRange(min, max){
    const smin = 0, smax = 1;
    var value = Math.random();
    // console.log(value);
    var margin = Math.abs(min - max)/Math.abs(smin - smax);
    var translated = (value-smin+min/margin)*margin;
    // console.log(translated);
    return Math.round(translated);
}
var value_to_guess = GetRandomNumberInRange(0, 100);
var previous_guesses = [];
var turns_left = 10;

function GuessIfNumberCorrect(){
    const value = document.getElementById("num").value;
    if (value == ""){
        console.log(value);
        document.getElementById("help").textContent = "at least guess something";
    }
    else{
        previous_guesses.push(value);
        document.getElementById("prev guesses").textContent = "previous guesses: ";
        for (var i = 0; i < previous_guesses.length; i++){
            if (i == 0){
                document.getElementById("prev guesses").textContent += previous_guesses[i];
            }
            else{
                document.getElementById("prev guesses").textContent += ", " + previous_guesses[i];
            }
        }
        if (value == value_to_guess){
            GameEnd("you got it! :)");
            document.getElementById("help").style.color = "green";
        }
        else if(value > value_to_guess){
            document.getElementById("help").textContent = "guess lower";
        }
        else if (value != null){
            console.log(value);
            document.getElementById("help").textContent = "guess higher";
        }
        turns_left--;
        document.getElementById("turns").textContent = "turns left: " + turns_left;
        if (turns_left <= 0){
            GameEnd("game over");
        }
    }
}
function GameEnd(message){
    document.getElementById("help").textContent = message;
    document.getElementById("help").style.fontSize = "30px";
    const restart = document.createElement("button");
    restart.addEventListener("click", Restart);
    restart.innerHTML="Restart";
    restart.className = "button";
    restart.style.margin = "10px";
    restart.id = "restart";
    document.getElementById("main").appendChild(restart);
}

function Restart(){
    value_to_guess = GetRandomNumberInRange(0, 100);
    turns_left = 10;
    previous_guesses = [];
    document.getElementById("help").style.color = "red";
    document.getElementById("help").textContent = "";
    document.getElementById("turns").textContent = "turns left: " + turns_left;
    document.getElementById("prev guesses").textContent = "";
    document.getElementById("num").value = "";
    document.getElementById("help").style.fontSize = "16px";
    document.getElementById("restart").remove();
}