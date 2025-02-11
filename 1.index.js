

function getData(){
  fetch("https://dummyjson.com/users")
  .then((res)=>res.json())
  .then((info)=>{
  var result = document.getElementById("output")
  result.innerHTML = info.users.map((user,index)=>`<li>username: ${user.username}</li>`).join("")
  })
}