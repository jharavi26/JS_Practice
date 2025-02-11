
function getData(){
  fetch("https://dummyjson.com/users")
  .then((res)=>res.json())
  .then((info)=>{
  var result = document.getElementById("output")
  result.innerHTML = info.users.map((user,index)=>`<li>username: ${user.username}</li>`).join("")
  })
}

async function Name (){
  const art = await fetch("https://dummyjson.com/users");
  const trs = await art.json();
  console.log(trs)
  console.log(trs.users[0].firstName)
  var result = document.getElementById("output")
  result.innerHTML = trs.users.map((user,index)=>`<li>username: ${user.firstName}</li>`).join("")
}

