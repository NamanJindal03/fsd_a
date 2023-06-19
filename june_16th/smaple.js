/* 
    TOPICS COVERED
    -> Local Storage
    -> For each
    -> map 

*/

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

// let arr = [10,20,30];

// const customFunc = function (val, i) {
//     //console.log('abcd')
//     if(val != 10){
//         return val;
//     }
// }

// function higherOrderFunctionMapReplica(cb){

//     //create a new array that we will return

//     let newArr = [];

//     for(let i=0; i<arr.length; i++){
//         newArr.push(cb(arr[i], i));
//     }

//     return newArr;
// }
// const customHOFValue = higherOrderFunctionMapReplica(customFunc)
// console.log(customHOFValue)

//YOur task
//Execute or write the function customFitlerFunc so that the customFilterOutput
//is equivalent to my filter output

/* 
    Algorithm  (How Filter Works)->
    1) Based on the length of the array we call the CallBack function that number of time
    2)  Pass the required arguments to the callback
    3) Based on the truthy and falsy factor we need to append the original arr value 
    to a new array 
*/

// const filterLogicCB = (num) => {
//     // return (num % 2 === 0); //[even values]
//     return (num %2) //[odd values]
// }

// arr = [2,3, 5,9,10, 18, 19]
// const result = arr.filter((num) => {
//     return (num % 2 === 0);
// })
// console.log(result) //

// const customFilterOutput = customFilterFunc(filterLogicCB)

// function customFilterFunc(cbFunc){
//     let filterArray = []
//     for(let i=0; i< arr.length; i++){
//         // const returnCbValue  = cbFunc(arr[i]) //true, false, flase, false, truee, true, false
//         // if(returnCbValue){
//         //     filterArray.push(arr[i])
//         // }
//         if(cbFunc(arr[i])){
//             filterArray.push(arr[i])
//         }

//     }
//     return filterArray;
// }

// console.log(customFilterOutput)

// let arr = [2,4,6,10];
// let result = arr.every((numb)=>{
//     return !(numb%2);
// });
// console.log(result);

// function customEvery(cb){
//     //this code you have to write
//     for(let i=0; i<arr.length; i++){
//         if(!cb(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// let customResult = customEvery((numb)=>{
//     return !(numb%2)
// })
// console.log(customResult)
// //custom function for every ->

/* 
    whenever we are dealing with some sort of a range in that condition, the end range is always
    exclusive
*/
/* Fill */
// let arr = [2,4,6,8, 10, 12];
// arr.fill('h', 2, 4);
// console.log(arr)
// [ 2, 4, 0, 0, 10, 12 ]

// function customFill (arr, valueToBeChanged, startingIndex, endingIndex){
//     if(startingIndex > endingIndex){
//         return 'errr'
//     }
//     // if(!startingIndex && !endingIndex){
//     //     for(let i=0; i< arr.length; i++){
//     //         arr[i] = valueToBeChanged;
//     //     }
//     //     return arr;
//     // }
//     if(!startingIndex){
//         startingIndex = 0;
//     }
//     if(!endingIndex){
//         endingIndex = arr.length;
//     }
//     while(startingIndex < endingIndex && startingIndex < arr.length){
//         arr[startingIndex] = valueToBeChanged;
//         startingIndex++;
//     }
//     return arr;
// }
// let changedArr = customFill(arr, 'h');
// console.log(changedArr)


