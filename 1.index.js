const art = document.getElementById("title");
art.textContent = ("Welcome to the World");

document.getElementById("description").style.backgroundColor = "lightgrey";

let text =  document.createElement("li")
text.innerHTML = "Item 3"

const list = document.getElementById("myList")

list.appendChild(text);

let node = document.querySelector(".parent");
console.log(node.parentElement)             //Accessing a parent node.








