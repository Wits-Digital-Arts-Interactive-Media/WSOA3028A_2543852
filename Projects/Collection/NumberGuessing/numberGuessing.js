const inputNumber = document.getElementById("inputNumber");
const guessBtn = document.getElementById("guessBtn");
const newNumberBtn = document.getElementById("newNumberBtn")
const hint = document.getElementById("hintText");

let randNum = Math.floor(Math.random()*100) + 1;
console.log(randNum)

newNumberBtn.onclick = function generateNewNumber(){
    randNum = Math.floor(Math.random()*100) + 1;
    console.log(randNum)
}

guessBtn.onclick = function(){
    let num = inputNumber.value;
    if (num == randNum){
        hint.textContent = `You guessed right!`;
    }
    else if (num < randNum){
        hint.textContent = `Guess HIGHER`;
    }
    else if (num > randNum){
        hint.textContent = `Guess LOWER`;
    }
}
