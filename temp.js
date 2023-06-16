// var isThisTrue = 9;
// var boolTrue = 'asbdhdshdb';

// if(isThisTrue % 2 == 0){
//     console.log('in if');
// }
// else if(boolTrue){ //java
//     console.log('in else if')
// }

var arrowFunc1 = () => {
    console.log('something')
}
arrowFunc1();

//instance 1 
(()=>{

})()




var calculate = (n1, n2, n3) => {
    return ()=>{
        return 10;
    }

    // return 10+20+30;
}
//higher order function
var hod = (numb1, numb2, numb3, cb) => {
   return cb(numb1, numb2, numb3) + numb1 
}

console.log(hod(6,7,8, calculate(10, 20, 30))); //output?

//27 -> 

// hod(1,2,3, () => {
//     console.log('first')
// })

// hod(1,3,5, function (){
//     console.log('normal function passed')
// })

// function random (num1, num2 = 5, num3 = 2){
//     return num1 + num2 + num3; 
// }
// random(1)  

// function greeting(name) {
//     return function() {
//         console.log('Hello, ' + name + '!');
//     } 
// }
    
// const greetJane = greeting('Jane');
    
// greetJane();

const random1 = (num1, num2) => {
    return num1 === parseInt('10'); //NaN
}
// const random2 = () => {
//     return ''; //'' is a falsy value => false
// }
const random2 = 5;

if(random1(10) || random2()){ //false
    console.log('I am okay')
}
else{
    console.log('please help me') //print this
}
//options 
/* 
    1) I am okay
    2) Error
    3) Please help me
    4) None of the above
*/