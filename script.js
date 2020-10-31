// let person ={
//     name: "evaaa",
//     organization: "WLiT",
//     greeting: function() {
//         console.log("Hello my name is ", person.name);
//     },
//    };
   
//    person.lastname = "Pradhan";
//    person.name ="Evasana";
//    console.log(person);

   //delete person.lastname;
   //console.log(person);

   //console.log(person.name); 
   //console.log(person.organization); 
   //person.greeting(); 

//    let name = Symbol("name");
//    let name1 = Symbol("name1");
//    let fruit ={
//        color: "red",
//        weight: 20,
//        [name]: "apple"
//    }
//    console.log(fruit);
//    fruit.name = "banana";
 
// fruit["color"] = "blue";
// fruit[name] = "pineapple";
// fruit[Symbol("name")]= "carrot";
// console.log(fruit);

//function declaration
// function test(){
//     console.log("this is test1")
// }

// //function expression
// const test1 = function(){
//     console.log("this is test 1";)
// }

// //fat arrow function expression
// const additionFunc = (x,y) => {
//     console.log(x+y);
// }

// test();
// test1();
// additionFunc(3,4);

// (function additionFunc(x,y)
// {console.log("Self invoking function");
// console.log(x+y);
// }) (3,4);

// function test(x,y){
//     return x+y;
//     console.log(x,y);
//     return x-y;
// }

function test(x,y){
    if x>y
    return x+y;
    console.log(x,y);
    return x-y;
}

let c =test(3,4);
console.log(c);



