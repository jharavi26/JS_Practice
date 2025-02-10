const art = {
  name : "Ravi",
  age : 28,
  address : "Mumbai"
}

console.log(typeof(art));
console.log(art.name);
console.log(art["age"]);

console.log(Object.keys(art));
console.log(Object.values(art));
console.log(Object.entries(art));
console.log(art.hasOwnProperty("address"));