const menuItems = [
    {name:"Home", href: "index.html" },
    {name:"Game Dev", href: "Projects/index.html"},
    {name:"Gallery", href: "Gallery/index.html"},
    {name:"Blogs" , href: "Blogs/index.html" },
    {name:"Web Design" , href: "Design/index.html"},
];

//creating a navigation
export function initialize (currentPage){
    add_hamburger();

    const nav = document.querySelector("header > nav");  //finding the nav element
    const ul = document.createElement("ul") ;    //creating an unordered list
    for (let menu_item of menuItems) {       //loops through menuItems
        const li = document.createElement("li");     //create a list item 
        if (currentPage != menu_item.name){      //if the param != menu_item.name
            const a = document.createElement("a");   //create an a-Element
            a.innerText = menu_item.name;     //change the text
            if (currentPage == "Home"){
                a.setAttribute("href", menu_item.href);   //set the href attribute to the menu_item.href
            }else{
                const _href = "../" + menu_item.href
                a.setAttribute("href", _href);
            };
            li.appendChild(a);   //append the a-Element to the List Item
        }else{
            li.innerText = menu_item.name;
            li.setAttribute("id", "activePage");
        }
        ul.appendChild(li);  //append the list Item to the unordered list
    }
    nav.appendChild(ul);     //append the unordered list to the nav-element

    add_footer();
    add_contact();
}

function add_footer(){
    const footer = document.querySelector("footer");
    const content = document.createElement("p");

    content.innerText = "Brought to you by Jay-Lee Shih 2024"
    content.setAttribute("class", "footer-content");
    footer.appendChild(content);
}

function add_contact(){
    const button = document.createElement("button");
    const header = document.querySelector("header");

    button.innerText = "Contact";
    button.setAttribute("class", "contact-button");
    header.appendChild(button);
}

function add_hamburger(){
    const header = document.querySelector("header");

    const hamburger_icon = document.createElement("i");

    const label = document.createElement("label");
    
    const check_box = document.createElement("input");
    check_box.setAttribute("type", "checkbox");
    check_box.setAttribute("id", "check");
    header.appendChild(check_box);

    hamburger_icon.setAttribute("class", "bx bx-menu");
    hamburger_icon.setAttribute("id", "menu-icon");

    label.setAttribute("class", "icons");
    label.setAttribute("for", "check");
    label.appendChild(hamburger_icon);
    header.appendChild(label);
}