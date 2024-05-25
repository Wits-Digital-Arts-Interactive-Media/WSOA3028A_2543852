const content = document.getElementById("wireframesContent");
const iterations = document.getElementsByClassName("iteration");
const iterationHeaders = document.querySelectorAll("section > h3")

function addIterationHeader(){
    for (let i=0; i < iterations.length; i++) {
        iterationHeaders[i].innerText = "Iteration " + (i+1);
    }
}

const cardContainer = document.getElementsByClassName("cardContainer");
let isDown = false;
let startX;
let scrollLeft;

for (const container of cardContainer) {
    container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
    });
    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
    });
    container.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      container.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
    
}

addIterationHeader();