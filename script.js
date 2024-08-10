document.body.style.cssText="margin:0;padding:0;background-color:#eeee";
let header = document.createElement("header");
header.style.cssText = "display:flex;justify-content:space-between;align-items:center;background-color:white;padding:1rem;";


let home = document.createElement("a");
home.textContent = "Home";
home.setAttribute("href","");

let about = document.createElement("a");
about.textContent = "About";
about.setAttribute("href","");

let service = document.createElement("a");
service.textContent = "Service";
service.setAttribute("href","");

let contact = document.createElement("a"); 
contact.textContent = "Contact";
contact.setAttribute("href","");

// Array Have All the Nav Links
let arr=[home,about,service,contact];
arr.forEach(item =>{
    item.style.textDecoration = "none";
    item.style.marginLeft = "1rem";
    item.style.fontFamily = "Arial";
    item.style.fontWeight = "bold";
    item.style.color = "#1e1e1e";

})


let logo = document.createElement('a');
logo.textContent = "Alpha";
logo.setAttribute("href","");
logo.style.cssText = "color:#921A40;font-weight:bold;font-size:1.8rem;text-decoration:none;font-Family:'Arial';text-transform:uppercase;letter-spacing:0.6rem;";
header.appendChild(logo);

let nav = document.createElement("nav");
nav.appendChild(home);nav.appendChild(about);nav.appendChild(service);nav.appendChild(contact);
header.appendChild(nav);

let nav_style=document.createElement("style");

const nav_style_text=`
    header nav :nth-child(n){
        position:relative;
    }
    header nav :nth-child(n)::after{
        position:absolute;
        content:"";
        width:0%;
        height:100%;
        top:0;
        left:0;
        border-bottom:3px solid #921A40;
        transition:all 0.2s ease-in-out;
    }

    header nav :nth-child(n):hover::after{
        width:100%;
    }

`

nav_style.textContent=nav_style_text;
document.body.appendChild(nav_style);

let footer = document.createElement("footer");
footer.textContent = "Copyright@Made With ❤️ By NoobPlayer1"
footer.style.cssText = "position:absolute;bottom:0;width:100%;height:5vh;display:flex;justify-content:center;align-items:center;background-color:#921A40;color:white;font-Family:'Arial';font-weight:bold;";

document.body.appendChild(header);
document.body.appendChild(footer);

// ===================================================
let container = document.createElement("div");
container.className = "container";

let i=0;

while(i<3){
    
    let card = document.createElement("div");
    let front = document.createElement("div");
    let back = document.createElement("div");
    
    card.className = `card card-${i+1}`;
    front.className = `front`;

    back.className = `back`;

    card.appendChild(front);
    card.appendChild(back);
    container.appendChild(card);
    i++;
}
let style = document.createElement("style");
const cssRule =
`
    .card{
        
        position:relative;
        transform-style: preserve-3d;
        transition:all 1s ease-in-out;

    }

    .card:hover{
        transform: rotateY(180deg);
    }
    .card > div{
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        top:0;
        left:0;
        width:100%;
        height:100%;
        backface-visibility: hidden;
        color:white;

    }

    .back{
        position:relative;
        transform: rotateY(180deg);
        background-image:linear-gradient(to left,#921a40,#921b10)
    }
    .card-1{
        grid-row:span 2;
    }
    
    .card-1 .front{
        background-image:linear-gradient(to left,#921a40aa,#921b10a5),url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D");
        background-size:cover;
        background-position:0rem;
        position:relative;
    }
    
    .card-1 .front::after{ 
        content:"Food";
        position:absolute;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:"Arial";
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:0.5rem;

    }

    .card-2{
        grid-row:span 2;
    }

    .card-2 .front{
        background-image:linear-gradient(to left,#921a40aa,#921b10a5),url("https://images.unsplash.com/photo-1439405326854-014607f694d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D");
        background-size:cover;
        background-position:0rem;
        position:relative;
    }
    
    .card-2 .front::after{ 
        content:"Water";
        position:absolute;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:"Arial";
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:0.5rem;

    }

    .card-3{
        grid-row:span 2;
    }

    .card-3 .front{
        background-image:linear-gradient(to left,#921a40aa,#921b10a5),url("https://images.unsplash.com/photo-1613160717888-faa82cdb8a94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGMlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D");
        background-size:cover;
        background-position:0rem;
        position:relative;
    }
    
    .card-3 .front::after{ 
        content:"Games";
        position:absolute;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-family:"Arial";
        font-weight:bold;
        text-transform:uppercase;
        letter-spacing:0.5rem;

    }


`
style.textContent = `${cssRule}`;

document.body.appendChild(style);
document.body.appendChild(container);
let Card =document.querySelectorAll(".card").forEach(element=>{
    element.style.cssText = "display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:white;margin:0.5rem;border-radius:0.5rem;line-height:0.1rem";
});
container.style.cssText = "display:grid;grid-template-columns: repeat(3,1fr);width:100%;height:85vh";

