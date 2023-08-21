//create a funciton which acts as delayed function
// const delayedCall = (bool) => {
//     return new Promise((resolve, reject)=>{
//         // resolve('i am resolved');
//         if(bool){
//             setTimeout(()=>{
//                 resolve('I am a bit delayed resolved')
//             }, 3000)
//         }
//         else {
//             setTimeout(()=>{
//                 reject('I am rejected')
//             }, 3000)
//         }
//     })
// }


// // console.log(delayedCall())//promise pending
// delayedCall(false).then((data)=>{
//     console.log(data) //a proper resolved promise
// })
// .catch((err)=>{
//     console.log('comign from catch')
//     console.log(err);//the rejected reason
// })

// delayedCall(true).then((data)=>{
//     console.log(data) //a proper resolved promise
// })
// .catch((err)=>{
//     console.log('comign from catch')
//     console.log(err);//the rejected reason
// })


// function DDNodeList(val, next, prev){
//     this.val = val;
//     this.next = next === 'undefined' ? null : next;
//     this.prev = prev === 'undefined' ? null : prev
// }

// const node = new NodeList(10);
// console.log(node);
// const node2 = new NodeList(20, node);
// console.log(node2);

// new NodeList(10)

// const obj = {}; //retrival?  o(1)
// const arr = [10, 20, 10, 50, 70, 100, 20, 70, 50, 100];
//I dont need repetitive values

//clg newArr = [10,20, 50, 70, 100]


//contains 

// let newArr = [];

// for(let ar  of arr){
//     if(newArr.includes(ar))

// }

//set -> data structure
//map -> data structure  -> map as the loop no->

//data structure created by js team -> what unique things it has ->
//set always contains ubnique value => 

// const set = new Set(arr);
// console.log(set);

// // for(let i=0; i<set.size; i++){
// //     console.log(set[i])
// // }
// for(let s of set){
//     console.log(s)
// }


// const newArr = [...set];

// console.log(newArr);
// set.add(4)
// set.add(4)
// set.add(4)
// set.add(4)
// set.add(4)
// set.add(4)
// set.add(10)
// console.log(set);
//set.size()
///set.has()
//set.delete()
//set.clear()
// const {0:a, 1:b, 2:c} = set;
// console.log(a, b, c)

//you can destructure sets with same syntax as array ->

//map -> 

// const m1 = new Map();
// m1.set('key1', 20);
// m1.set('key2', 30);
// m1.set('key3', 40);
// m1.set('key4', 50);
// console.log(m1);
// m1.delete('key2');
// m1.set('key10', 20000);
// console.log(m1)
// console.log(m1.has('key2'));
// console.log(m1.has('key3'));
// console.log(m1['key3']);

// for(let set1  of m1){
//     console.log(set1)
//     // console.log(key1);
//     // m1.delete(key1);
//     break;
// }
// console.log(m1);


// const obj = {
//     'a': 10,
//     'b': 5,
//     'c': 7
// }
// console.log(Object.entries(obj).sort((a,b)=> a[1]-b[1]))


// const sorted = [.]
// const array=[{"a":7},{"b":3},{"c":11}]

// const newarray=array.sort((a,b)=>{

// return Object.values(a)[0] - Object.values(b)[0]

// })
// console.log(newarray);

// const timerId = setTimeout(()=>{
//     let a = 10;

// })


// const delayedCall = (bool) => {
//     return new Promise((resolve, reject)=>{
//         // resolve('i am resolved');
//         if(bool){
//             setTimeout(()=>{
//                 resolve('I am a bit delayed resolved')
//             }, 3000)
//         }
//         else {
//             setTimeout(()=>{
//                 reject('I am rejected')
//             }, 3000)
//         }
//     })
// }


// // console.log(delayedCall())//promise pending
// delayedCall(true).then((data)=>{
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         // resolve('i am resolved');
//         setTimeout(()=>{
//             resolve(data)
//         }, 3000)
//     })
// }).then((newData)=>{
//     console.log(newData)
// })
// .catch((err)=>{
//     console.log('comign from catch')
//     console.log(err);//the rejected reason
// })

// function toBeExecutedLater2(data2){
    
// }   

// function toBeExecutedLater(data, toBeExecutedLater2){
//     //console.log(data)
//     //this also has some delayed task -> 
//     const newData = data +1;
//     toBeExecutedLater2(newData)
// }


// function callbackExec(cb) {
//     let a = 10;
//     cb(a, toBeExecutedLater2);
// }

// callbackExec(toBeExecutedLater);


// const timerID = setTimeout(()=>{
//     console.log('first exefcyted')
//     setTimeout(()=>{
//         console.log('second executed')
//     }, 3000)
// }, 10000)

// function random(){
//     console.log('i a random')
// }
// random.abcd = 10;

// console.log(random.abcd);
// random();

//infinite currying -> 


//TODO: Draft a function which will give me the output below for the function calls

// function sum(num1){
//     return function(b){
//         if(b === undefined){
//             console.log(num1);
//             return;
//         }
//         return sum(num1 + b);

//     }
// }

// sum(10)(20)(30)(); //expected output -> 60
// sum(10)();//expected output -> 10
// sum(10)(20)(30)(1)(1)(1)(); //expected output -> 63


// function sum(a){

//     return function(b){
    
//     if(b){
    
//     return sum(a+b);
    
//     }
    
//     return a;
    
//     }
    
// }


// // console.log(10);
// setTimeout(()=>{
//     console.log('later executed');
//     return 10;
// }, 1000)
// // console.log(20);


// const reutrnedData = (()=>{
//     return 10;
// })();

// console.log(reutrnedData)

// fetch('https://jsonplaceholder.typicode.com/tod/1')
//     .then((data)=>{
//         if(data.ok){
//             return data.json();
//         }
//         return Promise.reject(data);
//     })
//     .then((todoData)=>{
//         console.log(todoData);
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })

// fetch(url, {
//     method: 
//     body:
//     Headers
// })

// console.log('working')

import { helper , helper2} from "./helper.js";
import random from "./helper.js"
// helper();
// helper2();
// random();
console.log(name);
console.log(random);

console.log(random.r1());
console.log(random.r2());
