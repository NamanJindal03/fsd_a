// let array = [{key: 'a', value: 10}, {key: 'b', value: 20}, {key: 'c', value: 30}]; //initial arr


// const output = array.reduce((previousValue, currentValue)=>{
//     const {key, value} = currentValue;
//     const obj = new Object();

//     obj[key] = value;
//     previousValue.push(obj);
//     // previousValue.push({[key]: value});
//     return previousValue;
// }, [])
// console.log(output);

// const output = array.reduce((prev, curr) =>{
//     const {key, value} = curr;
//     prev[key] = value;
//     return prev;
// }, {})
// console.log(output)

//let newArr2 = {a: 10, b:20, c:30} //final 

// const res = array.reduce((acc, val) => {

//     const obj = {};
    
//     obj[val.key] = val.value;
    
//     return acc + JSON.stringify(obj);
    
// }, []);
//     console.log(res)
/* 
    [{a: 10}, {b: 20}] -> final output
*/
/* 
    reduce -> m

*/

// let newArr = [{a: 10}, {b: 20}, {c: 30}]; //newly generated array 


/* 
    dynamic object -> 

*/
// const newObj1 = {
//     name: 'naman',
//     age: 10, 
// }
/* 
    How Can I iterate over a object using map
*/


// const info = Array(newObj1).map((val) => {

//     return val.name;
    
// });
// console.log(info)

//[name, age]
// const output = Object.keys(newObj1).map((objKey)=>{
//     console.log('key : ', objKey);
//     console.log('value : ', newObj1[objKey]);
// })


/* 
    Object.keys
    Object.values
    Object.entries 

    Object.freeze
    Object.seal

    
    
    
    
    
    Object.getPrototypeOf
    Object.isFreeze()

*/

// const obj = {
//     name: 'naman',
//     age: 10,
//     nested: {nest1: 'n', nest2: '2'}
// }
// // Object.freeze(obj);
// Object.freeze(obj);

// // obj.name = 'abcd';
// obj.name = 'nj';
// obj.add = 'add';
// console.log(obj);
// console.log(obj);
/* 
    shallow copy, deep copy,
*/

// const obj2 = {...obj};
// obj2.age = 30;
// console.log(obj2);
// // shallow freeze

// obj.nested.nest1 = 'abcdefghijkl';
// console.log(obj)


/* 
    form -> 

    key -> value -> 
*/

/* 

*/
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));



// const abcd = {
//     name: 'naman',
//     age: 2
// }

// const abcd2 = abcd;

// abcd2.name = 'nj';
// console.log(abcd2);
// console.log(abcd);

/* 
    object and array -> reference 
    nested deep copy 

    shallow copy -> only on the 1st level
    deep copy -> all levels on nesting
*/

/* 
    let const -> 

    what is hoisting? ->>>
    process in which variable declaration and fns expression are moved to top of respective SCOPE

    phenomon in which it seems like the variable are moved to the top of the scope, and are variables
    are given a value undefined, normal funciton are referenfced.

    let const -> 
*/

// let sample1 = 10;
// function abcd(){
//     var testVar = 100;
//     let sample3 = 400;
//     // console.log(sample2); //not defined ->no TDZ for sample2, memory allocation for it hasnt even happend
//     {
//         console.log(sample2); //cannot access before initialization -> TDZ
//         let sample2 = 10; //
//     }
// }

// abcd();

// function test(){
//     let abcd = 5;
//     console.log(abcd);//5
//     {
//         let abcd = 10;
//         console.log(abcd);//10
//     }
//     {
//         abcd = 50; //not doing memory allocation, hence we are referencing the heirarchial lexical environment
//     }
//     console.log(abcd);//50
// }
// test();

// function test2(){
//     const func = ()=>{
//         console.log('func');
//     }
//     return [
//         func,  //0 index
//         ()=>{console.log('func2')} //1st index
//     ]
// }

// const output = test2();
// const check = [()=>{console.log('test3')}, [...output] ]
// check[1]; //func2
// console.log(check[1]) //array -> [func def, func ]
// var b;
// function test(){
//     let a = b = 30;
//     /* '
//         b = 30;
//         let a = b;
    
//     */



//     console.log(a); //30
//     console.log(b);//30
// }
// test();
// console.log(b);//30
// console.log(a); //error -> 

// var b;
// function test2(){
//     b = 10;
// }
// console.log(b) //this wont be undefined  -> 10 -> why?

// let a = 10;
// {
//     const a = 20;
// }

// var b = 20;
// {
//     var b = 40;
// }

// var c = 50;
// function test(){
//     var c = 100;
// }


// let d = 50;
// function test(){
//     let d = 100;
// }

// let e = 100;
// {
//     var e = 400; //example of illegal shadow -> no error
// }

// var f = 10;
// {
//     let f = 1000;
// }

/* 
    in the same scope let and const do not allow creation of 2 vairables by the same name
*/

/* 
    const , let and var -> 

    const -> 
    let -> 

    var -> 
    window.x =

*/

/* 

*/

// var x =  500;
// let xyz = 200;

/* 
    the scope in which let and const goes -> window doesnt attach it to itself 
*/

/* 
    const a -> [], {}

    let and var -> 

    let and var -> 


    const vs (var, let) -> efficient -> 
    interally ->  


    API -> 

    two systems -> communication between them happens through API -> 

    flipkart, delhivery -> 


    frotnend and backend communication also happens mainly through ->
    
    
    const movieData = {name: 'abcd', director:'abcd2'}; //const -> developer friendly -> 

    movieData = 100;

    for(in )//error -> terminate -> 



*/
// const abcd = {efef};
// abcd = 20;


// const radioTag = document.querySelector("input[type=radio]");
// const radioTag = document.querySelector('input[type="radio"]');

// // const radioTag2 = document.getElementById('temp');
// console.log(radioTag);


// const h1Tag = document.getElementsByTagName('h1');
// console.log(h1Tag);
// h1Tag.addEventListener

// console.log(h1Tag.events); 


/* 
    mouseOver
    mouseOut
    click
    blur
    focus
    check
    change
    scroll

    keydown
    keyup
    keypress


    click
    change
    keypress

    input






*/
// const documentNode = 

// const bodyNode = document.body;
// document.addEventListener("copy", async (event) => {
//     /* the session has shut down */
//     const copiedValue = await navigator.clipboard.readText();
//     console.log(copiedValue);
//     console.log('check');
//     const temp = document.createElement('div'); //
//     console.log(event.target); //
//     temp.append(copiedValue); //
//     bodyNode.append(temp) //
    
// });

// const radioTag2 = document.querySelectorAll('input[name="gender"]');
// console.log(radioTag2);

// const arrTempTag = [];
// for(const tempTag of radioTag2){
//     // console.log(tempTag.labels[0].innerText);
//     if(tempTag.labels[0].innerText === 'Female'){
//         arrTempTag.push(tempTag);
//     }
// }
// console.log(arrTempTag);

// radioTag2

//dom ->


const bodyNode = document.body;
const generateHtmlButton = document.querySelector("#generateHtml")
const addRandomHtml = () => {
    const container = document.createDocumentFragment();
    for(let i =0; i<100; i++){
        console.log('here')
        const tempNode = document.createElement('div');
        tempNode.innerText = i;
        container.append(tempNode);
         //it will start generating 
        //a ui in which we have i=0 displayed on the ui
    }
    bodyNode.append(container); //optimizaation happens in ui -> 
}

generateHtmlButton.addEventListener('click', addRandomHtml); //


/* 
    div
        div ->  class = filled -> 0% -> 10% -> blue
        div -> class = empty -> 100% -> 90%

*/