
// console.log(x);//
// getSomething(); //undefined() -> error -> 

// var x = 10; //undefined

// // function getSomething(){
// //     console.log('here is the thing')
// // }

// var getSomething = function(){ //undefined
//     console.log('first')
// }

/* 

*/

/* 
    what is hoisting? 
*/

// alert(foo())
// function foo(){
//     var bar = function(){
//         return 3;
//     }
//     return bar();
//     var bar = function(){
//         return 8
//     }
// }

// var x=10;

// const func=()=>{

//     if(x>5){
//         console.log(x); //output?
//         let x=20; //initialise
//     }
//     console.log(x);

// }

// func();



// function parent(){
//     var sample = 'sample';
//     return hoisted;
//     function hoisted(){
//         return 'I am a function'
//     }
//     var hoisted = 'I am a varaiable'
// }

// console.log(parent())

// var myVar = " foo";
// (
//     function(){
//         //hoisting happends for myVar: undefined
//         console.log("original value was: " , myVar);
//         var myVar = "naman";
//         console.log("New Value is:", myVar)
//     }
// )()


// var abcd = 10;
// var abcd = 1000;

// let jav = 1;
// const jav = 100;


// function parrent(){

//     var sample='sample';
    
//     return hoisted();

//     {
//         let hoisted="i am let"
//     }
    
//     function hoisted(){
    
//     return "i am function";
    
//     }
    
//     // var hoisted="i am variable"
    
//     }
    
// console.log(parrent());


// var x = 10;
// console.log(x)

// if(true){
//     (function(){
//         var x = 20;
//         console.log(x)
//     })()
// }
// console.log(x)

// var variable = 10;
// (()=>{
//     variable_3 = 35;
//     console.log(variable_3); //
//     var variable_3 = 45;
//     variable_2 = 15;
//     console.log(variable); //
// })();

// console.log(variable_2); // 
// console.log(variable_3); //
// var variable = 30;

// var a = 100;
// const b = a;
// b = 200;

// console.log(a); //100
// console.log(b); //200

// var obj = {name: 'naman', age: 2};
// var obj2 = obj;

// obj2 = {name:'naman', age: 2};
// obj.name = 'random';

// console.log(obj) //
// console.log(obj2) //

// function random (person1, person2){
//     person1.name = person2;
//     // person2.age = 10;
//     console.log(person1) //?
//     return {...person2}
// }

// var a = {name: 'naman', age: 5}
// a = random(a , {name: 'naman', age: 5});
// a.name = 'naman2';
// console.log(a) //?


let obj = {
    name: 'naman', age: 10
}
/* 
    obj.name = 'naman'
    obj['name'] = 'naman'

*/
let key = 'gender'; 
let value = 'male';

// obj.key = value;
// obj['key'] = value;

// obj[key] = value // obj['gender'] = value
// console.log(obj)

function callMe(obj, val){
    //write code
    return obj;
}
var obj2 = callMe({name: 'naman', age: 10}, {val:'tomorrow', val2:'today'})
console.log(obj2)
/* 
    expected output of obj2 = {name: 'naman', age:10, tomorrow: 'today'}
*/



/* 
    final output of obj => {
        name: 'naman', age: 10, gender: 'male'
    }
*/
