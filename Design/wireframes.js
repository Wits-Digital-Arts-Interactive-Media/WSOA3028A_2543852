const content = document.getElementById("wireframesContent");
const iterations = document.getElementsByClassName("iteration");
const iterationHeaders = document.querySelectorAll("section > h3")

function addIterationHeader(){
    for (let i=0; i < iterations.length; i++) {
        iterationHeaders[i].innerText = "Iteration " + (i+1);
    }
}

addIterationHeader();