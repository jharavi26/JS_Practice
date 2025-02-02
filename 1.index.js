const art = document.getElementById("title");
art.textContent = ("Welcome to Javascript");

document.getElementById("description").style.backgroundColor = "lightgrey";

let text =  document.createElement("li")
text.innerHTML = "Item 3"

const list = document.getElementById("myList")

list.appendChild(text);

const list2 = document.getElementById("item2")
