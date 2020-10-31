
let i = document.getElementById('add-button')

var todoarray = [];
//array.push("");
var ull = document.getElementById("todo-list");

function deletingWork(i) {
    ull.removeChild(ull.childNodes[0]);
}


function addingEvent(e) {
    // alert();
    let inp = document.getElementById('todo-input');
    let singletodo = inp.value;

    todoarray.push(singletodo);

    //now creating element
    let lii = document.createElement('li');

    lii.innerText = singletodo;



    ull.appendChild(lii);

}

i.addEventListener("click", addingEvent);
let j = document.getElementById('xx')

j.addEventListener("click", deletingWork);











