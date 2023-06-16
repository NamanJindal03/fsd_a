// function handleCallback(callback) {
//     // write your code here
//     callback(); // `callback` may or may not be a function  eerrr??
//     // if `callback` is a function, it will not throw an error
//     // if `callback` is not a function, `callback()` would throw an error which should be caught in catch block
//   }

 

// // case2
// //   var callback = 10;

// //random generator -> 
//   handleCallback(callback)

//function declarration
function abcd () {
    console.log('function declarration')
}
console.log(abcd()) //undefined








var abcd = function temp(){
    console.log('named function expression')
}

var abcd = function () {
    console.log('anonymous function expression')
}

var abcd = () => {
    'abcd' //return is compulsory
    // console.log('arrow based function expression -> anonomous ')
}


// var abcd = () => ('abcd') //automatically means that there is a return

// var abcd = (number, number2) => (number) //when I only have 1 argument

// var abcd = number => number

abcd(10, 20);

(function(){
    console.log('anonomous normal IIFE')
})()

(()=>{
    console.log('anonymous arrow IIFE')
})()
