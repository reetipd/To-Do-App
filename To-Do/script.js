let btnClicked = document.getElementById('add-button');
let addTask = document.getElementById('todo-input');
let uList = document.getElementById('todo-list');


btnClicked.addEventListener('click', ()=>{
    //console.log(addTask.value);
    if (addTask.value == ""){
        alert('Enter task first!')
    }
    else{
        let list = document.createElement('li');
        let btn = document.createElement('button');
        list.classList.add('list-style');
        btn.classList.add('btn-style');
        uList.appendChild(list);
        list.innerHTML = addTask.value;
        btn.innerText = 'X';
        list.appendChild(btn);
        
        //list.innerHTML = addTask.value;
        addTask.value = "";
        list.addEventListener('click',() => {
            list.setAttribute('style','color:red;text-decoration: line-through');
        })
        //btn.innerText = 'X';
        btn.addEventListener('click',() => {
            uList.removeChild(list);
            uList.removeChild(btn);
        })  
    }
})