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

let footer = document.createElement("footer");
footer.textContent = "Copyright@Made With ❤️ By NoobPlayer1"
footer.style.cssText = "position:absolute;bottom:0;width:100%;height:5vh;display:flex;justify-content:center;align-items:center;background-color:#921A40;color:white;font-Family:'Arial';font-weight:bold;";

document.body.appendChild(header);
document.body.appendChild(footer);

// ===================================================
let container = document.createElement("div");
container.className = "container";



let i=0;

while(i<15){
    
    let card = document.createElement("div");
    card.className = `card`;
    
    let elementNumber = document.createElement("p");
    elementNumber.style.cssText="font-family:'Arial';font-weight:bold;font-size:1.8rem";
    elementNumber.textContent = `${i+1}`;
    
    let elementDescription = document.createElement("p");
    elementDescription.textContent = 'Product';
    elementDescription.style.cssText="font-family:'Arial';color:#807c7c";
    
    card.appendChild(elementNumber);card.appendChild(elementDescription);
    container.appendChild(card);
    i++;
}

document.body.appendChild(container);
let Card =document.querySelectorAll(".card").forEach(element=>{
    element.style.cssText = "display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:white;margin:0.5rem;border-radius:0.5rem;line-height:0.1rem";
});
container.style.cssText = "display:grid;grid-template-columns: repeat(3,1fr);width:100%;height:85vh";