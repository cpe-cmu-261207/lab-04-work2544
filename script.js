/* Your code here */
var input = document.querySelector("#taskinput");
var task = [[], [], []]
var tasklist = document.querySelector("#tasklist")
document.querySelector("#addbtn").addEventListener("click", addtask);
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
var donetask=function(index){
  return function curried_func(e)
  {
    task[1].push(task[0][index])
    task[0].splice(index, 1);
    show()
    console.log(task)
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
  tasklist.innerHTML = ""
  for (let index = 0; index < task[0].length; index++) {
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
    newtask.id = index
    donebtn.addEventListener("click",donetask(index))
    deletebtn.addEventListener("click",deletetask(index))
    taskdiv.append(newtask)
    btndiv.append(donebtn)
    btndiv.append(deletebtn)
    div.append(taskdiv)
    div.append(btndiv)
    tasklist.append(div)
  }
}
