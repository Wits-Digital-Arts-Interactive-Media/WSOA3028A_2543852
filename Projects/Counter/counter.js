let counter = 0;

document.getElementById("decreaseButton").onclick = function(){
    counter--;
    document.getElementById("counter").textContent = counter;
}

document.getElementById("increaseButton").onclick = function(){
    counter++;
    document.getElementById("counter").textContent = counter;
}

document.getElementById("resetButton").onclick = function(){
    counter = 0;
    document.getElementById("counter").textContent = counter;
}