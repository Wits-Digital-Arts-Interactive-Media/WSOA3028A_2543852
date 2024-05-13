const coords = {x: 0, y: 0};
const mouseTrailElements = [];

function createTrailElements(num){
    for(let i = 0; i < num; i++){
        const circle = document.createElement("div");
        circle.setAttribute("class", "mouseTrail");
        mouseTrailElements.push(circle);
        document.querySelector("body").appendChild(circle);
    }
}

createTrailElements(1);

mouseTrailElements.forEach(function (circle){
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    animateTrail();
});

function animateTrail(){
    let x = coords.x;
    let y = coords.y;

    mouseTrailElements.forEach(function (circle, index){
        circle.style.left = x - 15 + "px";
        circle.style.top = y - 15 + "px";
        circle.x = x;
        circle.y = y;

        const nextCircle = mouseTrailElements[index + 1] || mouseTrailElements[0];
        x += (nextCircle.x - x) * 0.25;
        y += (nextCircle.y - y) * 0.25;
    });
}
