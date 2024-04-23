const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRXTUVWXYZ123456789"
const box = document.getElementById("box")


function randomChar(){
    let len = chars.length;
    let c = chars[Math.floor(Math.random()*len)+1];
    return c;
}


function randomString(){
    let _string = "";
    for (let j = 0; j < 10; j++){
        for(let i = 0; i <= 1000; i++){
            _string += randomChar();
        }
        _string += "\n";
    }
    return _string;
}


const welcome = document.querySelector("main > h1");

function randomWelcome(){
    let _string = welcome.innerText;
    let newString = ""
    for (const c of _string) {
        let _c; 
        const coin = Math.floor(Math.random()*2)+1;
        if (coin == 1){
            _c = c.toUpperCase();
        } else{
            _c = c.toLowerCase();
        }
        newString += _c;
    }
    return newString;
}

onmousemove = e =>{
    box.innerText = randomString();
}
