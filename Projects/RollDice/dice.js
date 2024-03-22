const rollButton = document.getElementById("rollDice");
const randomNum = document.getElementById("randomNumber");

let num;

rollButton.onclick = function(){
    num = Math.floor(Math.random()*6) + 1;
    randomNum.textContent = num;
}