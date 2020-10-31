let inputWork = document.getElementById('todo-input');
let button = document.getElementById('add-button');
let ol = document.getElementById('todo-list');

button.onclick = ()=>{
   var work = inputWork.value;     // input value asignment
    var li = document.createElement('li');
    li.textContent=work + " ";
   
    var crossbutton = document.createElement('button'); // creating cross button
    var crossbuttonID = document.createAttribute("id"); //creating id attribute for the button
    crossbuttonID.value = "crossButton";
    crossbutton.setAttributeNode(crossbuttonID);
       
    crossbutton.textContent='Delete';
    li.appendChild(crossbutton);

    crossbutton.onclick=()=>{
        crossbutton.parentElement.remove();
    }
       
    ol.appendChild(li);
    li.onclick = ()=>{
        li.setAttribute('style','color:red;');
        var result = work.strike();
        li.innerHTML = result;
        li.appendChild(crossbutton);      
    }
    

}


