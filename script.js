let inputField = document.getElementById('todo-input');
let addToDoButton = document.getElementById('add-button');
let toDoList = document.getElementById('todo-list');

addToDoButton.addEventListener('click', function(){
    var text = document.createElement('li');
    text.innerHTML = document.getElementById("todo-input").value;
    toDoList.appendChild(text);
    text.style.color = "white";
    text.addEventListener('click', function(){
        text.style.textDecoration = "line-through";
        text.style.color = "red";
    })

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    text.append(btn); 
    btn.style.marginLeft = "20px";
    btn.style.marginTop = "5px";
    btn.style.marginBottom = "5px";

    btn.addEventListener('click', event =>toDoList.removeChild(text, btn));
    if (text.innerHTML !== ""){
        toDoList.appendChild(text) ;
        }
    text.addEventListener('dblclick', function(){
        toDoList.removeChild(text);
        
    })
})
        