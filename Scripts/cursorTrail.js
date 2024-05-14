const coords = {x: 0, y: 0};
const mouseTrailElements = [];

// create functions and append them to the body
// add attribute class="mouseTrail" so that we can change the CSS using the class
function createTrailElements(num){
    for(let i = 0; i < num; i++){
        const circle = document.createElement("div");
        circle.setAttribute("class", "mouseTrail");
        mouseTrailElements.push(circle);
        document.querySelector("body").appendChild(circle);
    }
}

createTrailElements(1);

//loop through each element in the mouseTrailElements array and make the x and y = 0
mouseTrailElements.forEach(function (element){
    element.x = 0;
    element.y = 0;
});

//everytime the mouse moves it updates the coord variables and calls the animateTrail funciton
window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;   //the x-axis of the client
    coords.y = e.pageY;     //the y-axis of the page so that the element doest get left behind :(

    animateTrail();
});

//
function animateTrail(){
    let x = coords.x;
    let y = coords.y;

    mouseTrailElements.forEach(function (element, index){
        element.style.left = x - 17 + "px";     //centers the element onto the mouse
        element.style.top = y - 17 + "px";
        element.x = x;
        element.y = y;

        const nextCircle = mouseTrailElements[index + 1] || mouseTrailElements[0];  //if null then go to first element in array
        x += (nextCircle.x - x) * 0.25; //move x0.25 the distance of the previous element of the array
        y += (nextCircle.y - y) * 0.25;
    });
}


