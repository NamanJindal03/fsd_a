//function statement
// function isEven(number) {
    
//     if( number % 2 === 0 ){
//         return true;
//     }
//     return false;
// }
// console.log(isEven()); //undefined

// function isEven(number){
//     return number % 2 === 0;
// }

// var isEven = number => number % 2 === 0;

// console.log(isEven(9))


//function call vs function reference

var sample = () => {
    return 'sampleValue'
}

function abcd(){
    console.log('def') //

    function def(){
        console.log('abcd') //
    }
    def();

    return sample()
}

var holding = abcd();
console.log('I am called')
console.log(holding()) //output?


var variable1= 'abcd'
var variable2 = function () {
    console.log('erewrwe')
}
var varaiable3 = 10

variable1()//error
variable2()//call
variable3() //error



// console.log(abcd()())


// console.log(abcd()) //output func


// (function iife(){
//     console.log('iife called')
// })

