const menuItems = [
    {name:"Home", href: "index.html" },
    {name:"Projects", href: "Projects/index.html"},
    {name:"Blogs" , href: "Blogs/index.html" },
    {name:"Web Design" , href: "Design/index.html"},
    {name:"Profile", href:  "Profile/index.html"}
]

//creating a nav-bar
export function initialize (currentPage){
    const nav = document.querySelector("header > nav")  //finding the nav element
    const ul = document.createElement("ul")     //creating an unordered list
    for (let menuItem of menuItems) {       //loops through menuItems
        const li = document.createElement("li")     //create a list item 
        if (currentPage != menuItem.name){      //if the param != menuItem.name
            const a = document.createElement("a")   //create an a-Element
            a.innerText = menuItem.name     //change the text
            if (currentPage == "Home"){
                a.setAttribute("href", menuItem.href)   //set the href attribute to the menuItem.href
            } else if(currentPage == "DesignPages"){
                const _href = "/" + menuItem.href
                a.setAttribute("href", _href)
            } else{
                const _href = "../" + menuItem.href
                a.setAttribute("href", _href)
            }
            li.appendChild(a)   //append the a-Element to the List Item
        }else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)  //append the list Item to the unordered list
        
    }
    nav.appendChild(ul)     //append the unordered list to the nav-element
}
