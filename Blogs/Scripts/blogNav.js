const blogNav = document.querySelector("main > nav")
const blogArticles = document.querySelectorAll("main > article");
const blogContent = document.querySelectorAll("main > article > div");
const blogAnchors = document.querySelectorAll("main > article > a");
const blogHeaders = document.querySelectorAll("main > article > a > h2");

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
        a.innerText = blogHeaders[i].innerText;

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
        let href = "#" + trimHeader;
        blogAnchors[i].setAttribute("href", href);

        blogContent[i].setAttribute("id", trimHeader);
        blogContent[i].setAttribute("hidden", "until-found");

        const closeButton = document.createElement("button");
        closeButton.innerText = "close";
        blogContent[i].appendChild(document.createElement("br"));
        blogContent[i].appendChild(closeButton);

        closeButton.addEventListener("click", (event)=>{
            blogContent[i].setAttribute("hidden", "");
        })

    }
}

blogOpenClose();
backToTop();