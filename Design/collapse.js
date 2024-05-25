const iterationAnchor = document.getElementsByClassName("iterationAnchor");
const iterationContent = document.getElementsByClassName("content");
const iterationHeader = document.getElementsByClassName("headerName")

function iterationOpenClose(){
    for (let i=0; i<iterationAnchor.length; i++){
        const trimHeader = iterationHeader[i].innerText.replaceAll(" ","") + "Content";
        let _href = "#" + trimHeader;
        iterationAnchor[i].setAttribute("href", _href);

        iterationContent[i].setAttribute("id", trimHeader);
        iterationContent[i].setAttribute("hidden", "until-found");

        const closeButton = document.createElement("button");
        closeButton.innerText = "close";
        iterationContent[i].appendChild(document.createElement("br"))
        iterationContent[i].appendChild(closeButton);

        closeButton.addEventListener("click", (event)=>{
            iterationContent[i].setAttribute("hidden", "until-found");
            iterationAnchor[i].scrollIntoView(true);
        })
    }
}

iterationOpenClose();