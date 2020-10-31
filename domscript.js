//Displays Date and Day
const fullDate = new Date();
let dnum = fullDate.getDate();
let day = fullDate.getDay();
let month = fullDate.getMonth();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

document.getElementById("date").innerHTML += months[month]+" "+dnum;
document.getElementById("day").innerHTML += days[day];


//Displays the Todo List
document.getElementById('add-button').addEventListener("click", function(){
 
    let li = document.createElement('li');

    //Creates the List    
    let liText = document.createTextNode("");
    liText.textContent = document.getElementById('todo-input').value +" "
    li.appendChild(liText);
      
    //Creates the Remove Button
    let btn = document.createElement('button');
    let btnText = document.createTextNode("Delete ");
    btn.appendChild(btnText);
    let trash = document.createElement('i');
    trash.className="fa fa-trash-o";
    btn.appendChild(trash);
    btn.className = "buttonClass"
    btn.onclick = function(){
        btn.parentElement.remove();    //Removes individual task
        return;
    }
    li.appendChild(btn);

    document.getElementById('todo-list').appendChild(li); 

    //Crosses the task when done
    document.getElementById("todo-list").addEventListener("click", function(event){
        let tgt = event.target;
        if (tgt.tagName.toUpperCase() == "LI") {
            tgt.setAttribute('style', 'text-decoration-line: line-through; color: red;')
  }
    })
})


