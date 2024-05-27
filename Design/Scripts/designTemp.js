const iterations = document.getElementsByClassName("tempIteration");
const cardContainers = document.getElementsByClassName("tempCardContainer");
const cards = document.getElementsByClassName("tempCards");
const iterationHeaders = document.querySelectorAll("section > h3");

function addIterationHeader(){
    for (let i=0; i < iterations.length; i++) {
        iterationHeaders[i].innerText = "Iteration " + (i+1);
        iterations[i].setAttribute("id", "Iteration"+(i+1));
    }
}

for (let i=0; i<cardContainers.length; i++) {
  cardContainers[i].addEventListener("mouseenter", (e) =>{
    cards[i*2].style.animationPlayState = "paused";
    cards[i*2+1].style.animationPlayState = "paused";
  })
}

for (let i=0; i<cardContainers.length; i++) {
  cardContainers[i].addEventListener("mouseleave", (e) =>{
    cards[i*2].style.animationPlayState = "running";
    cards[i*2+1].style.animationPlayState = "running";
  })
}

addIterationHeader();