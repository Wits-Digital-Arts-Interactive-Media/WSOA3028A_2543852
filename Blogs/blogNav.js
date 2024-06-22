const blogNav = document.getElementById("blogNav");
const blogArticles = document.getElementsByClassName("card");
const blogContent = document.getElementsByClassName("e-content");
const blogAnchors = document.getElementsByClassName("blogAnchor");
const blogHeaders = document.getElementsByClassName("blogName");

function createBlogNav(){
    const ul = document.createElement("ul");
    for (let i=0; i<blogArticles.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        const splitHeader = blogHeaders[i].innerText.split(":");
        const front = splitHeader[0];
        const trimHeader = front.replaceAll(" ","");
        let href = "#" + trimHeader;
        a.setAttribute("href", href);
        // a.innerText = blogHeaders[i].innerText;
        a.innerText = front;

        blogArticles[i].setAttribute("id", trimHeader);

        li.appendChild(a);
        ul.appendChild(li)
    }
    blogNav.appendChild(ul);
}

function backToTop(){
    for (const blog of blogArticles) {
        const nav = blog.querySelector("nav");
        const a = document.createElement("a");
        a.innerText = "back to top";
        a.setAttribute("href", "#Top");
        nav.appendChild(a);
        }
}

function blogOpenClose(){
    for (let i=0; i<blogAnchors.length; i++) {
        const splitHeader = blogHeaders[i].innerText.split(":");
        const front = splitHeader[0];
        const trimHeader = front.replaceAll(" ","") + "Content";
        let _href = "#" + trimHeader;
        blogAnchors[i].setAttribute("href", _href);

        blogContent[i].setAttribute("id", trimHeader);
        blogContent[i].setAttribute("hidden", "until-found");

        const closeButton = document.createElement("button");
        closeButton.innerText = "close";
        blogContent[i].appendChild(document.createElement("br"));
        blogContent[i].appendChild(closeButton);

        closeButton.addEventListener("click", (event)=>{
            blogContent[i].setAttribute("hidden", "until-found");
            blogAnchors[i].scrollIntoView(true);
        })
        closeButton.addEventListener("touchend", (event)=>{
            blogContent[i].setAttribute("hidden", "until-found");
            blogAnchors[i].scrollIntoView(true);
        },false)
    }
}

blogOpenClose();
backToTop();
createBlogNav();