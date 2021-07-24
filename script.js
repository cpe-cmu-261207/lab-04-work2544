/* Your code here */
var input = document.querySelector("#taskinput");
var task = [[], []] 
var tasklist = document.querySelector("#tasklist")
document.querySelector("#addbtn").addEventListener("click", addtask);
if(localStorage.task==null)
localStorage.setItem('task', JSON.stringify(task));
task = JSON.parse(localStorage.getItem('task'));
show()
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#addbtn").click();
  }
});
function addtask() {
  if (input.value == "") {
    alert("Cannot left it empty")
  } else {
    const commingtask = input.value
    task[0].push(commingtask)
    show()
  }
}
function donetask (index){
  return function curried_func(e)
  {
    task[1].push(task[0][index])
    task[0].splice(index, 1);
    show()
  }
}
function deletetask(index) {
  return function curried_func(e)
  {
    task[0].splice(index, 1);
  show()
  }
  
}
function show() {
  localStorage.setItem('task', JSON.stringify(task));
  tasklist.innerHTML = ""
  document.querySelectorAll('button').disabled=true
  for (let index = task[0].length-1; index >= 0; index--) {
    const div = document.createElement("div")
    const taskdiv = document.createElement("div")
    const btndiv = document.createElement("div")
    const newtask = document.createElement("li")
    const donebtn = document.createElement("button")
    const deletebtn = document.createElement("button")
    div.classList.add("flex");
    div.classList.add("justify-between");
    donebtn.classList.add("donebtn")
    donebtn.innerText = "DONE"
    deletebtn.classList.add("deletebtn")
    deletebtn.innerText = "DELETE"
    newtask.innerHTML = task[0][index]
    newtask.classList.add("pt-2")
    newtask.classList.add("text-2xl")
    div.classList.add("border-b-2")
    div.classList.add("border-purple-400")
    
    donebtn.style.visibility='hidden'
    deletebtn.style.visibility='hidden'
    div.addEventListener("mouseover",function(){
      donebtn.style.visibility='visible'
      deletebtn.style.visibility='visible'
    })
    div.addEventListener("mouseout",function(){
      donebtn.style.visibility='hidden'
      deletebtn.style.visibility='hidden'
    })
    donebtn.addEventListener("click",donetask(index))
    deletebtn.addEventListener("click",deletetask(index))
    taskdiv.append(newtask)
    btndiv.append(donebtn)
    btndiv.append(deletebtn)
    div.append(taskdiv)
    div.append(btndiv)
    tasklist.append(div)
  }
  for (let index = task[1].length-1; index >=0; index--) {
    const div = document.createElement("div")
    const donetask = document.createElement("li")
    const p=document.createElement('p')
    p.classList.add("line-through")
    p.classList.add("text-xl")
    p.innerHTML=task[1][index]
    div.classList.add("border-b-2")
    div.classList.add("border-purple-400")
    donetask.append(p)
    div.classList.add("py-2")
    div.append(donetask)
    tasklist.append(div)
  }
}
