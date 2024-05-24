const mainNav = document.querySelector("main > nav");
const top = document.querySelector("main");
const iterations = document.querySelectorAll("main > article");
const iterationHeaders = document.querySelectorAll("main > article > h2");

top.setAttribute("id", "#Top");

function createDesingNav(){
    const ul = document.createElement("ul");
    for (let i=0; i<iterations.length; i++){
        const li = document.createElement("li");
        const a = document.createElement("a");

        const href = "#" + iterationHeaders[i].innerText;
        const trim_href = href.replaceAll(" ", "");
        a.setAttribute("href", trim_href);
        a.innerText = iterationHeaders[i].innerText;

        iterations[i].setAttribute("id", trim_href.replace("#", ""));

        li.appendChild(a);
        ul.appendChild(li);
    }
    mainNav.appendChild(ul);
}

function backToTop(){
    for (const iteration of iterations) {
        const nav = iteration.querySelector("nav");
        const a = document.createElement("a");
        a.innerText = "back to top";
        a.setAttribute("href", "#Top");
        nav.appendChild(a);
    }
}

createDesingNav();
backToTop();