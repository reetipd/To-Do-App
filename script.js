var ul = document.getElementById('todo-list');

//Harek choti click huda call hune function
function insertOnList() {
    let item = document.getElementById('todo-input').value; //Catch text value from input field
    if (item.length > 0) { //Khali bhaye kina banaune nabanam
        let li = document.createElement('li'); //create li, catch li and store in variable li
        li.className += "list";
        let btn = document.createElement("button"); //create button and store in btn
        btn.innerHTML = "x"; //Button text i.e x
        btn.className += "cross-button";
        console.log(li);
        li.appendChild(document.createTextNode(item)); //li ko text node ma item ko value rakheko (look line 4)
        li.appendChild(btn); //li bhita btn rakheko
        ul.appendChild(li); // ul bhitra li rakheko (<li> text-from-you [x]</li>)
    }
}

//List (li) wala kun kun part ma click garda k k hune?
allClicksonList = e => {
    const li = e.target.closest('li');

    if (!li) return; //li ma click nabhaye matlab nai bhayena

    if (e.target.matches('.cross-button')) { // button ma thichda harayo
        li.remove();
    } else { // text ma thichda done bhanne css propert lagyo (css property ko lagi refrence to external stylesheet)
        li.classList.toggle('done');
    }
}



//Text hanyo ani enter ma haat gaihalcha 
//So, enter thichda ni Add button ko kaam garaune function
pressEnterKey = e => {
    let item = document.getElementById('todo-input').value;
    let input = document.getElementById('todo-input');
    if (item.length > 0 && e.keyCode === 13) { //13 baneko enter ko key code racha 
        // console.log('Enter');
        document.getElementById('add-button').click(); //click bhayo hai enter thichda 
        input.value = ""; //aarko list item halda poila ko le disturb nagaros bhaera matra
    }
}



let add = document.getElementById('add-button');
add.addEventListener("click", insertOnList); //Add button Click huda call hune

let body = document.getElementById("body");
body.addEventListener("keypress", pressEnterKey); //Key press garda call hune



ul.addEventListener("click", allClicksonList); // Added list ko kunai pani kuna ma click huda call hune

let input = document.getElementById('todo-input');
add.addEventListener("click", () => { input.value = ""; }); // blick huda empty hune