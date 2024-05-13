const mouseTrailElements = [];

function createTrailElements(num){
    for(let i = 0; i < num; i++){
        const circle = document.createElement("div");
        circle.setAttribute("class", "mouseTrail");
        mouseTrailElements.push(circle);
    }
}

createTrailElements(1);