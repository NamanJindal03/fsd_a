// let sample = '12323';

// localStorage.setItem('my_key', sample)

// let arr_sample = ['namn', 'op'];

// localStorage.setItem('my_key_2', JSON.stringify(arr_sample)) //ideally this thing worked, but array also are needed to get
// //covnerted to JSON.stringify
// let storedValue1 = JSON.parse(localStorage.getItem('my_key_2' ));
// console.log(storedValue1[0])


// let obj = {
//     first_name: 'naman'
// }

// localStorage.setItem('my_key_3', obj) //console has no roleplay

// let localStoredValue = localStorage.getItem('my_key_3');
// console.log(localStoredValue);

// // let parsedLocalValue = JSON.parse(localStoredValue)
// // console.log(parsedLocalValue)
// // console.log(parsedLocalValue.first_name)

// // window.localStorage === localStorage

// /* 
//     window? 
// */

// // non primitive datatypes

// //Dates -> 


// let max = 0;

// arr.forEach((val)=>{

//     if(val > max){
//         max = val;
        
//     }
// })

// console.log(arr)
// console.log(max)
// console.log(abcd);//undefined?


// let mapOutput = arr.map((val, ind) =>{
//     // return completeArr;
//     return 10;
// })
// let mapOutput = arr.map(customFunc)
// console.log(mapOutput) ///

/* 
     we w
*/

// let returnOfFUnc = function (){
//    console.log('abcd') //

// }
// console.log(returnOfFUnc) //undeifned



let arr = [10,20,30];

const customFunc = function (val, i) {
    console.log('abcd')
}

function higherOrderFunctionMapReplica(cb){

    //create a new array that we will return

    let newArr = [];

    for(let i=0; i<arr.length; i++){
        newArr.push(cb(arr[i], i));
    }

    return newArr;
}
const customHOFValue = higherOrderFunctionMapReplica(customFunc)
console.log(customHOFValue)


