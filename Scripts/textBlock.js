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

    welcome.innerText = newString;
}

function animWelcome(){
    const _string = "Welcome";
    let newString = _string;
    let i = 0;

    function iterate(){
        newString += " ~";
        i++;
        if(i == 4){
            i = 0;
            newString = _string;
            welcome.innerText = _string;
        } else{
            welcome.innerText = newString;
        }
    }
    
    
    setInterval(iterate, 1000);
}

//animWelcome();
// setInterval(randomWelcome, 1000);
